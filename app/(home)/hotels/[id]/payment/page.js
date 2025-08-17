import { auth } from "@/auth";
import { getHotelById, getUserByEmail } from "@/backend/queries";
import PaymentForm from "@/components/payment/PaymentForm";
import Search from "@/components/search/Search";
import { getDayDifference } from "@/utils/data-util";
import { redirect } from "next/navigation";

export default async function PaymentPage({
  params: { id },
  searchParams: { checkin, checkout },
}) {
  const session = await auth();
  if (!session) {
    redirect(
      `/login?redirectUrl=/hotels/66263526f50c2e548501f288/payment?checkin=${checkin}&checkout=${checkout}`
    );
  }

  const loogedInUser = await getUserByEmail(session?.user?.email);
  const hotelInfo = await getHotelById(id);
  let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
  if (checkin && checkout) {
    const days = getDayDifference(checkin, checkout);
    cost = cost * days;
  }
  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>{hotelInfo.name}</b> and base price is{" "}
          <b>${cost}</b>{" "}
          {checkin &&
            checkout &&
            `for ${getDayDifference(checkin, checkout)} days`}
        </p>
        <PaymentForm
          user={loogedInUser}
          checkin={checkin}
          checkout={checkout}
          info={hotelInfo}
        />
      </div>
    </section>
  );
}
