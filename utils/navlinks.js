const routes =[
  {href: "/recipes/new", title: "New Recipe"},
  {href: "/reviews", title: "Reviews"},
  {href: "/logout", title: "Logout"},
];

const authRoutes =[
  {href: "/login", title: "Login"},
  {href: "/register", title: "Register"},
];

module.exports = function navLinks(request, response, next){
  if(request.session.currentUser){
    response.locals.routes = routes;
  } else{
    response.locals.routes = authRoutes;
  }
  next();
}