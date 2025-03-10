/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Object in charge of loading, storing, and playing audio for a
 *     workspace.
 * @class
 */

import internalConstants from 'blockly/core/internal_constants';
import userAgent from 'blockly/core/utils/useragent';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';
import {globalThis} from 'blockly/core/utils/global';


/**
 * Class for loading, storing, and playing audio for a workspace.
 * @param {WorkspaceSvg} parentWorkspace The parent of the workspace
 *     this audio object belongs to, or null.
 * @constructor
 * @alias Blockly.WorkspaceAudio
 */
const WorkspaceAudio = function(parentWorkspace) {
  /**
   * The parent of the workspace this object belongs to, or null.  May be
   * checked for sounds that this object can't find.
   * @type {WorkspaceSvg}
   * @private
   */
  this.parentWorkspace_ = parentWorkspace;

  /**
   * Database of pre-loaded sounds.
   * @private
   */
  this.SOUNDS_ = Object.create(null);
};

/**
 * Time that the last sound was played.
 * @type {Date}
 * @private
 */
WorkspaceAudio.prototype.lastSound_ = null;

/**
 * Dispose of this audio manager.
 * @package
 */
WorkspaceAudio.prototype.dispose = function() {
  this.parentWorkspace_ = null;
  this.SOUNDS_ = null;
};

/**
 * Load an audio file.  Cache it, ready for instantaneous playing.
 * @param {!Array<string>} filenames List of file types in decreasing order of
 *   preference (i.e. increasing size).  E.g. ['media/go.mp3', 'media/go.wav']
 *   Filenames include path from Blockly's root.  File extensions matter.
 * @param {string} name Name of sound.
 */
WorkspaceAudio.prototype.load = function(filenames, name) {
  if (!filenames.length) {
    return;
  }
  let audioTest;
  try {
    audioTest = new globalThis['Audio']();
  } catch (e) {
    // No browser support for Audio.
    // IE can throw an error even if the Audio object exists.
    return;
  }
  let sound;
  for (let i = 0; i < filenames.length; i++) {
    const filename = filenames[i];
    const ext = filename.match(/\.(\w+)$/);
    if (ext && audioTest.canPlayType('audio/' + ext[1])) {
      // Found an audio format we can play.
      sound = new globalThis['Audio'](filename);
      break;
    }
  }
  if (sound && sound.play) {
    this.SOUNDS_[name] = sound;
  }
};

/**
 * Preload all the audio files so that they play quickly when asked for.
 * @package
 */
WorkspaceAudio.prototype.preload = function() {
  for (const name in this.SOUNDS_) {
    const sound = this.SOUNDS_[name];
    sound.volume = 0.01;
    const playPromise = sound.play();
    // Edge does not return a promise, so we need to check.
    if (playPromise !== undefined) {
      // If we don't wait for the play request to complete before calling
      // pause() we will get an exception: (DOMException: The play() request was
      // interrupted) See more:
      // https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
      playPromise.then(sound.pause).catch(function() {
        // Play without user interaction was prevented.
      });
    } else {
      sound.pause();
    }

    // iOS can only process one sound at a time.  Trying to load more than one
    // corrupts the earlier ones.  Just load one and leave the others uncached.
    if (userAgent.IPAD || userAgent.IPHONE) {
      break;
    }
  }
};

/**
 * Play a named sound at specified volume.  If volume is not specified,
 * use full volume (1).
 * @param {string} name Name of sound.
 * @param {number=} opt_volume Volume of sound (0-1).
 */
WorkspaceAudio.prototype.play = function(name, opt_volume) {
  const sound = this.SOUNDS_[name];
  if (sound) {
    // Don't play one sound on top of another.
    const now = new Date;
    if (this.lastSound_ !== null &&
        now - this.lastSound_ < internalConstants.SOUND_LIMIT) {
      return;
    }
    this.lastSound_ = now;
    let mySound;
    if (userAgent.IPAD || userAgent.ANDROID) {
      // Creating a new audio node causes lag in Android and iPad.  Android
      // refetches the file from the server, iPad uses a singleton audio
      // node which must be deleted and recreated for each new audio tag.
      mySound = sound;
    } else {
      mySound = sound.cloneNode();
    }
    mySound.volume = (opt_volume === undefined ? 1 : opt_volume);
    mySound.play();
  } else if (this.parentWorkspace_) {
    // Maybe a workspace on a lower level knows about this sound.
    this.parentWorkspace_.getAudioManager().play(name, opt_volume);
  }
};

exports.WorkspaceAudio = WorkspaceAudio;
