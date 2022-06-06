const db = require("../models");
const item = db.item;

exports.allItem = (req, res) => {
  try {
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.detailItem = (req, res) => {
  try {
    const id = req.params.id;
    const data = item.find((item) => item.id == id);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ message: "Item not fount" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
