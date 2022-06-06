const db = require("../models");
const Payruns = db.payruns;

exports.allPayruns = (req, res) => {
  try {
    res.status(200).send(Payruns);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
