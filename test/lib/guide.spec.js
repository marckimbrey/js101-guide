import expect from 'expect'
const path = require("path");
const mock = require("mock-fs");
const Guide = require('../../lib/guide')

const baseDir = '/Users/eg/src/js101-guide/guides'
const items = [
    'WELCOME',
    'TESTING'
]
const menu = () => 'mock'

const guide = new Guide(baseDir, items, menu)

describe('Guide', () => {
  it('should be intialized with a base directory, menu items and terminal menu', () => {
      expect(guide.baseDir).toEqual(baseDir)
      expect(guide.items).toEqual(items)
      expect(guide.menu).toEqual(menu)
  })
  it('should an instance of Guide', () => {
      expect(guide instanceof Guide).toEqual(true)
  })
  it('should return a README path given a menu label', () => {
      expect(guide.readMePath('FOO BAR')).toEqual(path.join(baseDir, 'foo-bar', 'guide.md'))
  })
  it('should throw an error if there is a problem rendering the README file', () => {
      guide.renderReadMe('WRONG DIR', (err) => {
        expect(err instanceof Error).toEqual(true)
      })
  })
})
