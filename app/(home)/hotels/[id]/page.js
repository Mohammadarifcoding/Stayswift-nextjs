import Summary from "@/components/hotel/details/Summary";
import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";

const HotelDetailsPage = ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  return (
    <>
      <Summary hotelId={id} checkin={checkin} checkout={checkout} />
      <Gallery hotelId={id} />
      <Overview hotelId={id} />
    </>
  );
};

export default HotelDetailsPage;
