const path = require('path')
const File = require('../../lib/file')
const SOLUTION_FILEPATH = path.join(__dirname, '/solution/index.js')
const HELLO_FILEPATH = path.join(__dirname, '../../hello.js')

const file = new File()

file.compareFileOutput(SOLUTION_FILEPATH, HELLO_FILEPATH)
