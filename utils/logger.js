module.exports = function logger(request, response,next){
  console.log(`${request.url}: ${request.method} - ${new Date().toLocaleDateString()}`);
  next();
}