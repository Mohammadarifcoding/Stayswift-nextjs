
import { Suspense } from "react";
import HotelRating, { HotelRatingSkeleton } from "./HotelRating";

import Link from "next/link";
import HotelReviewNumber, { HotelReviewNumberSkeleton } from "./HotelReviewNumber";

const HotelSummaryInfo = ({fromListPage, info}) => {
  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2 className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}>{info?.name}</h2>
        <p>📍 {info?.city}</p>
        <div className="flex gap-2 items-center my-4">
          <Suspense fallback={<HotelRatingSkeleton/>}>
            <HotelRating id={info?.id} />
          </Suspense>
          <Suspense fallback={<HotelReviewNumberSkeleton/>}>
            <HotelReviewNumber id={info?.id} />
          </Suspense>
        </div>
        <div>
            <span className="bg-yellow-300 p-1 rounded-md">{info?.propertyCategory} Star Property</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">${(info?.highRate + info?.lowRate)/2}/night</h2>
        <p className=" text-right">Per Night for 1 Room</p>
        {
          fromListPage ? (<Link href={`/hotels/${info?._id}`} className="btn-primary ">Details</Link>) : (<button className="btn-primary ">Book</button>)
        }
      </div>
    </>
  );
};

export default HotelSummaryInfo;