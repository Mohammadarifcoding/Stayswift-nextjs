
import { auth } from "@/auth";
import Image from "next/image";

const ProfileInfo = async() => {
  const session = await auth()
  return (
    <div className="flex flex-col items-center py-8 text-center">
      {
        session?.user?.image ? <Image src={session?.user?.image} width={100} height={100} alt="profile" className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px]" />: <div className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-orange-600 grid place-items-center text-4xl text-white">
        S
      </div>
      }
     

      <div>
        <h3 className="text-2xl font-semibold lg:text-[28px]">{session?.user?.name}</h3>
        <p className="leading-[231%] lg:text-lg">{session?.user?.email}</p>
      </div>

      <div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
    </div>
  );
};

export default ProfileInfo;


export const ProfileInfoSkeleton = ()=>{
  return(
     <div className="flex flex-col items-center py-8 text-center animate-pulse">
                {/* Profile Image Skeleton */}
                <div className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-gray-300" />

                {/* Name & Email Skeleton */}
                <div className="mt-4 space-y-2 w-48">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto" />
                  <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto" />
                </div>

                {/* Divider Skeleton */}
                <div className="w-3/4 border-b border-gray-300 py-6 lg:py-4" />
              </div>
  )
}