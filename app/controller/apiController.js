

module.exports = {

  me : function  (req, res, next) {
    res.json({
      "message" : "this seems to work :D"
    });
  },

  who : function (req, res, next) {
    res.json({
      message: "Who are you man?"
    });
  }

};
