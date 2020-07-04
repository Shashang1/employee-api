const Review = require('../models/user');

exports.addReview = async function () {
  let review = new Review(...payload);
  return review.save();
}

exports.getReview = async function (userId) {
  return Review.find({userId});
}