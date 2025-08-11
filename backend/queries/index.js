import { hotelModel } from "../models/hotel-model";

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
