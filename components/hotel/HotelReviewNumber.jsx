

import { getReviewsForAHotel } from "@/backend/queries";
import Link from "next/link";

const HotelReviewNumber = async ({id}) => {
    const reviews = await getReviewsForAHotel(id);

  return (
   <>
    {
      reviews?.length === 0 ?
        (<Link href="#" className="underline">Be the first one to review</Link>) :
        (<Link href={`/hotel/${id}/reviews`} className="underline">{reviews.length} Reviews</Link>)
    }
    </>
  )
}

export default HotelReviewNumber


export  const HotelReviewNumberSkeleton = () => {
  return (
    <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
  );
};