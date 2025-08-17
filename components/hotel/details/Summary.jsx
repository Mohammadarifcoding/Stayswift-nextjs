import { getHotelById } from "@/backend/queries";
import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = async({hotelId}) => {
  const data = await getHotelById(hotelId)
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo source="details" info={data}/>
      </div>
    </section>
  );
};

export default Summary;

