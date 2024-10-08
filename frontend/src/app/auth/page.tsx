"use client";

import Image from "next/image";
import { Images } from "@/lib/data/ImageData";
import { useContext, useEffect, useRef} from "react";
import  Register  from "@/components/main/Register";
import Signin from "@/components/main/Signin";
import { Context } from "@/context/ContextProvider";

export default function Login() {
  const context = useContext(Context);
  const authRef = useRef<HTMLDivElement>(null);
  const authRe = useRef<HTMLDivElement>(null);

  useEffect(() => {
    authRef.current?.classList.remove("animate-fadeRight");

    setTimeout(() => {
      authRef.current?.classList.add("animate-fadeRight");
    }, 0);
  }, [context?.authToggle]);

  return (
    <div className="w-screen h-screen bg-white ">
      <div className="w-full h-full flex container py-2 px-4 md:px-0 md:py-8 ">
        <div className="w-full h-full flex border rounded-[15px] p-2 border-secondary  overflow-x-hidden">
          <div className=" hidden w-1/2 h-full  relative rounded-2xl overflow-y-hidden lg:flex items-center ">
            <div className="w-full   columns-[200px]  space-y-3 relative  ">
              {Images.map((img, index) => {
                return (
                  <Image key={index} src={img} alt="" className="rounded-lg" />
                );
              })}
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-full md:overflow-hidden flex items-center ">
            <div className="w-full  flex flex-col gap-7  md:gap-14 h-[600px] pt-4 md:pt-0    items-center   ">
              <div
                className="w-full flex flex-col items-center gap-6  "
                ref={authRe}
              >
                <p className="font-Poppins">Welcome to lorem..!</p>
                <div className="flex bg-secondary  relative rounded-full py-1.5 px-2 w-1/2 md:w-[35%] gap-4 justify-between text-white font-Poppins">
                  <button
                    onClick={() => context?.setAuthToggle(false)}
                    className="  py-2 rounded-full w-1/2 relative z-10 "
                  >
                    Login
                  </button>
                  <button
                    onClick={() => context?.setAuthToggle(true)}
                    className="py-2 rounded-full w-1/2 text-center relative z-10"
                  >
                    Register
                  </button>
                  <div className="absolute  transition-all duration-300 h-full w-full  rounded-full px-2 py-1.5  left-0 top-0">
                    <div
                      className={`w-1/2  transition-all duration-700  h-full bg-primary rounded-full ${
                        context?.authToggle ? "translate-x-full" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
              <div ref={authRef} className="animate-fadeRight px-4 md:px-0">
                {context?.authToggle ? <Register /> : <Signin />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
