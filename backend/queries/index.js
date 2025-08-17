import { hotelModel } from "../models/hotel-model";
import { ratingModel } from "../models/rating-model";
import { reviewModel } from "../models/review-model";

export async function getAllHotels() {
  const hotel = await hotelModel
    .find()
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();
  return hotel;
}
export async function getRatingsForAHotel(hotelId) {
  const ratings = await ratingModel.find({ hotelId: hotelId }).lean();

  return ratings;
}

export async function getHotelById(hotelId) {
  console.log(hotelId);
  const hotel = await hotelModel.findById(hotelId).lean();
  return hotel;
}

export async function getReviewsForAHotel(hotelId) {
  const reviews = await reviewModel.find({ hotelId: hotelId }).lean();

  return reviews;
}
