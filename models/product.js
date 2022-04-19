const fs = require('fs')
const path = require('path')
const rootDir = require('../helpers/path')
const filePath = path.join(rootDir, 'data', 'products.json')

module.exports = class Product {
  constructor(title) {
    this.title = title
    this.path = path.join(rootDir, 'data', 'products.json')
  }

  save() {
    fs.readFile(filePath, (err, content) => {
      let products = []

      if (!err) products = JSON.parse(content)

      products.push(this)
      fs.writeFile(filePath, JSON.stringify(products), err => console.log(err))
    })
  }

  static all(callback) {
    fs.readFile(filePath, (err, content) => {
      let products = []

      if (!err) products = JSON.parse(content)
      callback(products)
    })
  }
}
