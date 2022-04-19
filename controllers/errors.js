exports.notFound = (req, res) => {
  const pageTitle = 'Page not found'
  res.status(404).render('errors/404', { pageTitle })
}
