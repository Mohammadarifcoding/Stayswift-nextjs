import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
  hotelId: {
    required: true,
    type: mongoose.Types.ObjectId,
  },
  userId: {
    required: true,
    type: mongoose.Types.ObjectId,
  },
  checkin: {
    required: true,
    type: String,
  },
  checkout: {
    required: true,
    type: String,
  },
});

export const bookingModel =
  mongoose.models.bookings ?? mongoose.model("bookings", bookingSchema);
