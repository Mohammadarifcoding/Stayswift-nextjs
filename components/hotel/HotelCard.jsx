import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = ({hotel}) => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={hotel?.thumbNailUrl}
        className="max-h-[162px] max-w-[240px]"
        alt={hotel?.name}
        width={200}
        height={50}
        quality={100}
      />
      <HotelSummaryInfo fromListPage={true} info={hotel} />
    </div>
  );
};

export default HotelCard;



