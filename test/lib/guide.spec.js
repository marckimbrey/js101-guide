var path = require("path");
var mock = require("mock-fs");
import expect from 'expect'
import Guide from '../../lib/guide'

const name = 'EXAMPLE'
const baseDir = '/Users/eg/src/js101-guide/guides'
const filename = 'guide.md'
const fileContents = 'Example file contents'
const guide = new Guide(name, baseDir)

describe('Guide', () => {
  it('should be initialized with a name and base directory', () => {
      expect(name).toEqual(guide.getName())
      expect(baseDir).toEqual(guide.getBaseDir())
  })
  it('should have private properties', () => {
      expect(guide.name).toEqual(undefined)
      expect(guide.baseDir).toEqual(undefined)
  })
  it('should get the README guide file path', () => {
      const expected = path.join(baseDir, 'example', 'guide.md')
      const actual = guide.filePath()
      expect(expected).toEqual(actual)
  })
  it('should render the README guide', () => {
      expect(true).toEqual('render' in guide)
  })
  // mock({
  //   dir: {
  //     filename: fileContents
  //   }
  // })
  // it('should output the README guide', () => {
  //     const expected = fileContents
  //   //   const { name, dir, guide } = setup()
  //     //
  //   //   const expected = path.join(dir, '/example.md')
  //   //   const actual = guide.filePath
  //     //
  //     expect(fileContents).toEqual(guide.fileContents)
  // })
  // mock.restore()
});
