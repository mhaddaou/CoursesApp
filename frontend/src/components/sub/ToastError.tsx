import Image from "next/image";
import { useRouter } from "next/navigation";
export default function ToastError({msg} : {msg : string}) {
  const router = useRouter();
  const handlClick = () => {
    router.push("/auth");
  };
  const ms = "you are not authorized you need to loggin first"
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-white/40 backdrop-blur-3xl z-50">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[80%] lg:w-1/2 bg-white flex flex-col items-center gap-14  py-12 px-8 rounded-xl">
          <Image
            src="/assets/icons/error.svg"
            alt=""
            width={100}
            height={100}
          />

          <p className="text-lg font-Poppins font-semibold tracking-wide text-gray">
            {msg}
          </p>
          {msg == ms && <button
            onClick={handlClick}
            type="button"
            className="bg-primary text-lg text-white px-5 py-2 w-1/2 rounded-lg hover:bg-secondary hover:text-gray transition-all duration-500"
          >
            Login
          </button>}
        </div>
      </div>
    </div>
  );
}
