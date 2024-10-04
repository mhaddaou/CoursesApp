import Image from "next/image";

export default function SuccessCourse() {
    return (
        <div className="w-full h-full flex justify-center items-center">
              <div className="bg-white  py-14 px-8 rounded-md">
                <div className="w-full flex justify-center">
                  <Image
                    src="/assets/icons/success.svg"
                    alt=""
                    width={150}
                    height={150}
                  />
                </div>

                <p className="font-Poppins text-xl text-gray tracking-wider capitalize pt-10">
                  Course has been updated successfully
                </p>
              </div>
            </div>
    )
}