const db = require("../models");
const Workers = db.workers;
const Ratings = db.ratings;
const Users = db.users;

exports.workerProfile = (req, res) => {
  try {
    const result = Workers.find((worker) => worker.id === +req.params['id']);
    const {params} = req
    console.log(params)
    if (result) {
      const rating = Ratings.find((data) => data.workerId === result.id)
      rating.ratingByUser.map( data => {
        const user = Users.find(user => user.id === data.userId)
        data.firstname = user.firstname;
        data.lastname = user.lastname;
      })
      res.status(200).send(
        {
          ...result,
          rating: rating.ratingValue,
          ratingCount: rating.ratingCount,
          ratingComment: rating.ratingByUser
        });
    } else {
      return res.status(404).send({ message: "Worker Not found." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }

};

exports.allWorker = (req, res) => {
  try {
    const result = Workers.map( worker => {
      const Rating = Ratings.find(rating => rating.workerId === worker.id);
      return {
        ...worker,
        rating: Rating.ratingValue,
        ratingCount: Rating.ratingCount
      }
    })
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
