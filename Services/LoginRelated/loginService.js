var isDirector = function(db,data) {
  var cursor = db.collection('directors').find();
  cursor.each(function(err,doc) {
    if(doc!=null) {
      //print doc to html table
    } else {
      //print no items
    }
  });
};

var isFoster = function(db,data) {
  var cursor = db.collection('directors').find();
  cursor.each(function(err,doc) {
    if(doc!=null) {
      //print doc to html table
    } else {
      //print no items
    }
  });
};

module.exports = {
  isDirector: isDirector,
  isFoster: isFoster
}
