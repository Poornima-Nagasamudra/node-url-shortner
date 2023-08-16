const UrlShortner = require("../model/urlShortner");
const urlShortnerCltr = {};

urlShortnerCltr.list = (req, res) => {
  UrlShortner.find()
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};

urlShortnerCltr.create = (req, res) => {
  const body = req.body;
  UrlShortner.create(body)
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};

urlShortnerCltr.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  UrlShortner.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};

urlShortnerCltr.destroy = (req, res) => {
  const id = req.params.id;
  UrlShortner.findByIdAndDelete(id)
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};

urlShortnerCltr.newurl = (req, res) => {
  hashedurl = req.params.hashedurl

  UrlShortner.findOne({ hashedurl: hashedurl })
    .then((urldata) => {
      res.json(urldata)
    })
    .catch((err) => {
      res.json(err.message)
    })
};
module.exports = urlShortnerCltr;
