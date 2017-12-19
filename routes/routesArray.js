var routes = [
  require('/aboutswop'),
  require('/howitworks'),
  require('/index'),
  require('/login')
  require('/signup')
  require('/swopmen')
  require('/swopwomen')
]

// Add access to the app and db objects to each route
module.exports = function routes(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  })
}

