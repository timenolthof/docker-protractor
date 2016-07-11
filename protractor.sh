#!/usr/bin/env bash

set -ex

export DISPLAY=:99

concurrent --kill-others \
  '/usr/bin/Xvfb :99 -screen 0 1024x768x24 -ac +extension GLX +render -noreset' \
  'protractor ./protractor.conf.js'
