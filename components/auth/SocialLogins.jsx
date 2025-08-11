
import { handleGithubAuth, handleGoogleAuth } from "@/backend/actions/authentication";
import Image from "next/image";
import Link from "next/link";

const SocialLogins = ({mode}) => {
  return (
    <>
      <div className="text-center text-xs text-gray-500 mb-3">{mode == 'register' ? (<Link href="/login">Login</Link>) : (<Link href="/register">Register</Link>)} or signup with</div>
      <div className="flex gap-4">
                    <form
      action={handleGithubAuth}
      className=" w-full  border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
    ><button className=" w-full mt-4 py-2  rounded-md flex items-center gap-2 justify-center">
          <Image src="/fb.png" alt="facebook" width={40} height={40} />
          <span>Facebook</span>
        </button></form>
        
            <form
      action={handleGoogleAuth}
      className=" w-full border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
    >
        <button className=" w-full mt-4 py-2  rounded-md flex items-center gap-2 justify-center">
          <Image src="/google.png" alt="google" width={40} height={40} />
          <span>Google</span>
        </button>
    </form>
      

      </div>
    </>
  );
};

export default SocialLogins;
