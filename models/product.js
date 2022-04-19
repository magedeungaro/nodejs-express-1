const fs = require('fs')
const path = require('path')
const rootDir = require('../helpers/path')
const filePath = path.join(rootDir, 'data', 'products.json')

const load = (callback) => {
  fs.readFile(filePath, (err, content) => {
    let products = []
    if (!err) products = JSON.parse(content)

    callback(products)
  })
}
module.exports = class Product {
  constructor(title) {
    this.title = title
  }

  save() {
    load((products) => {
      products.push(this)
      fs.writeFile(filePath, JSON.stringify(products), err => console.log(err))
    });
  }

  static all(callback) {
    load(callback)
  }
}
