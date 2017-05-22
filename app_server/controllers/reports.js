
/* GET 'home' page */

module.exports.homelist = function(req, res) {
  res.render('index', { title: 'Reports home page' })
};

/* GET 'reports' page */ 
module.exports.new = function(req, res) {
  res.render('index', {title: 'New report page'}); 
};

/* GET 'search' page */ 
module.exports.search = function(req, res) {
  res.render('index', {title: 'Search page'}); 
}; 

