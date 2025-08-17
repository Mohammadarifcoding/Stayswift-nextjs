import { isDateInBetween } from "@/utils/data-util";
import { bookingModel } from "../models/booking-model";
import { hotelModel } from "../models/hotel-model";
import { ratingModel } from "../models/rating-model";
import { reviewModel } from "../models/review-model";
import mongoose from "mongoose";
import { userModel } from "../models/user-model";

export async function getAllHotels(destination, checkin, checkout) {
  const regex = new RegExp(destination, "i");

  const hotels = await hotelModel
    .find({ city: { $regex: regex } })
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();

  let allHotels = hotels;
  if (checkin && checkout) {
    allHotels = await Promise.all(
      allHotels.map(async (hotel) => {
        const isBooked = await findBooking(hotel._id, checkin, checkout);
        return { ...hotel, isBooked: isBooked };
      })
    );
  }

  return allHotels;
}
export async function getRatingsForAHotel(hotelId) {
  const ratings = await ratingModel.find({ hotelId: hotelId }).lean();

  return ratings;
}

export async function getHotelById(hotelId) {
  console.log(hotelId);
  const hotel = await hotelModel
    .findOne({ _id: new mongoose.Types.ObjectId(hotelId) })
    .lean();
  return hotel;
}

export async function getReviewsForAHotel(hotelId) {
  const reviews = await reviewModel.find({ hotelId: hotelId }).lean();

  return reviews;
}

const findBooking = async (hotelId, checkin, checkout) => {
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();
  const found = matches.find((match) => {
    return (
      isDateInBetween(checkin, match.checkin, match.checkout) ||
      isDateInBetween(checkout, match.checkin, match.checkout)
    );
  });
  return found;
};

export const getUserByEmail = async (email) => {
  const user = await userModel.findOne({ email: email }).lean();
  return user;
};
