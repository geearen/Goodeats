module.exports = {
  authRequired: function (request, response, next) {
    if (!request.session.currentUser) {
      return response.redirect("/login");
    }
    else {
      return next();
    }
  }
}
