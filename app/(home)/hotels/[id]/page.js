import Summary from "@/components/hotel/details/Summary";
import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";

const HotelDetailsPage = ({ params: { id } }) => {
  return (
    <>
      <Summary hotelId={id} />
      <Gallery hotelId={id} />
      <Overview hotelId={id} />
    </>
  );
};

export default HotelDetailsPage;
