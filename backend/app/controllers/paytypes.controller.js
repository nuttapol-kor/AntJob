const db = require("../models/paytypes");
const { Additions, Deductions, Reimbursements, Contributions } = db;

exports.allPaytypes = (req, res) => {
  const data = {
    addition: Additions,
    deduction: Deductions,
    reimbursement: Reimbursements,
    contribution: Contributions,
  };
  try {
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.allAdditions = (req, res) => {
  try {
    res.status(200).send(Additions);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
