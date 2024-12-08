import fs from 'node:fs'

export default class FileReader {
  static readAndParseJSON(filename) {
    try {
      const cities = fs.readFileSync(filename, 'utf-8')
      return JSON.parse(cities)
    } catch (error) {
      throw new Error(`${error.message}`)
    }
  }
}