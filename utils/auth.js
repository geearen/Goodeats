module.exports = {
  authRequired: function (request, response, next) {
    if (!request.session.currentUser) {
      return response.redirect("/login");
    }
    else {
      request.body.user = request.session.currentUser.id;
      return next();
    }
  }
}
