#!/bin/bash

set -e

source ${NVM_DIR}/nvm.sh && nvm install --lts

npm install -g pnpm
npm install -g prettier