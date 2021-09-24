#!/usr/bin/env node
'use strict'

const path = require('path')
const fs = require('fs')
const realPath = fs.realpathSync(__dirname)
const script = path.join(realPath, 'psyslog.js')

module.exports = require('./lib/transport')

if (require.main === module) {
  // used as cli
  require(script.toString())
}
