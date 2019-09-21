//this folder requries the orm
//'burgers' is the table input
//function(response) is the callback which will be sent into the routes.js file

var orm = require('../config/orm.js');

var burger = {
  all: function(cb){
    orm.all('burgers',function(res){
      cb(res);
    })
  },

  update: function(id,cb){
    orm.update('burgers',id,cb);
  },

  create: function(name,cb){
    orm.create('burgers', name, cb);
  },
  delete: function(condition, cb) {
    console.log("delete id: " + condition);
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  },
  read: function(condition, cb) {
    orm.read("burgers", condition, function(res) {
      cb(res);
    });
  }
}

module.exports = burger;
