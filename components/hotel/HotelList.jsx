import { getAllHotels } from "@/backend/queries";
import HotelCard from "./HotelCard";

const HotelList = async({destination,checkin,checkout}) => {
  const allHotels = await getAllHotels(destination,checkin,checkout)
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          allHotels.map(hotel=>(<HotelCard key={hotel._id} hotel={hotel} destination={destination} checkin={checkin} checkout={checkout}/>))
        }
       
      </div>
    </div>
  );
};

export default HotelList;


export const HotelCardSkeleton = () => {
  return (

        <div className="col-span-9">
      <div className="space-y-4">
        {
          Array.from({ length: 5 }).map((hotel,key)=>(    <div key={key} className="flex gap-6 border border-gray/20 p-4 rounded-md animate-pulse">
      {/* Image Skeleton */}
      <div className="bg-gray-200 max-h-[162px] max-w-[240px] w-[240px] h-[162px] rounded-md" />

      {/* Info Skeleton */}
      <div className="flex-1 space-y-3">
        <div className="h-6 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />

        <div className="flex gap-2 items-center my-4">
          <div className="bg-gray-200 w-[35px] h-[35px] rounded-sm" />
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-200 rounded w-16" />
        </div>
      </div>

      {/* Price & Button Skeleton */}
      <div className="flex flex-col gap-2 items-end justify-center">
        <div className="h-6 bg-gray-200 rounded w-24" />
        <div className="h-4 bg-gray-200 rounded w-32" />
        <div className="h-8 bg-gray-200 rounded w-20" />
      </div>
    </div>))
        }
       
      </div>
    </div>

  );
};