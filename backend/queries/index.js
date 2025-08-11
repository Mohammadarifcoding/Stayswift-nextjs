import { hotelModel } from "../models/hotel-model";

export async function getAllHotels(params) {
  const hotel = await hotelModel.find();
  return hotel;
}
