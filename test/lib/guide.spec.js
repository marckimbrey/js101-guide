import expect from 'expect'
var path = require("path");
var mock = require("mock-fs");

import Guide from '../../lib/guide'

const name = 'EXAMPLE'
const dir = '/Users/eg/src/js101-guide/guides'
const filename = 'example.md'
const fileContents = 'Example file contents'
const guide = new Guide(name, dir)

describe('Guide class', () => {
  it('should be initialized with a name and directory', () => {
      expect(name).toEqual(guide.name)
      expect(dir).toEqual(guide.dir)
  })
  it('should get the README guide file path', () => {
      const expected = path.join(dir, '/example.md')
      const actual = guide.filePath
      expect(expected).toEqual(actual)
  })
  mock({
    dir: {
      filename: fileContents
    }
  })
  it('should output the README guide', () => {
      const expected = fileContents
    //   const { name, dir, guide } = setup()
      //
    //   const expected = path.join(dir, '/example.md')
    //   const actual = guide.filePath
      //
      expect(fileContents).toEqual(guide.fileContents)
  })
  mock.restore()
});
