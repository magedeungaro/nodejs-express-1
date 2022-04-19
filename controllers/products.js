const Product = require('../models/product')

exports.index = (req, res) => {
  const pageTitle = 'All products'
  const products = Product.all((products) => {
    res.status(200).render('products/index', { products, pageTitle })
  })

}

exports.new = (req, res) => {
  const pageTitle = 'New product'
  res.render('products/new', { pageTitle })
}

exports.create = (req, res) => {
  const product = new Product(req.body)
  product.save()
  res.redirect('/products')
}

exports.edit = (req, res) => {
  const pageTitle = 'Edit product'
  res.render('products/edit', { pageTitle, product })
}
