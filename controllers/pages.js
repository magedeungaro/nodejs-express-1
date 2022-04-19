exports.home = (req, res) => {
  const pageTitle = 'Homepage'
  res.status(200).render('pages/home', { pageTitle })
}
