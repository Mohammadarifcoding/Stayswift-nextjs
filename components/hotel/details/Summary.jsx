import { getHotelById } from "@/backend/queries";
import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = async({hotelId, checkin, checkout}) => {
  const data = await getHotelById(hotelId)
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo source="details" info={data} checkin={checkin} checkout={checkout}/>
      </div>
    </section>
  );
};

export default Summary;

