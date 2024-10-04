"use client";

import Image from "next/image";
import React, { FormEvent, useContext, useEffect, useRef } from "react";
import { useState } from "react";
import PasswordShow from "../../../public/assets/icons/password-show.svg";
import PasswordHidden from "../../../public/assets/icons/password-hidden.svg";
import { Context } from "@/context/ContextProvider";
import { SigninData } from "@/utils/interfaces";
import { signinUser } from "@/utils/restApi";
import { useRouter } from "next/navigation";

const Signin = () => {
  const context = useContext(Context);
  const router = useRouter();
  const [passwordTowgel, setPasswordTowgel] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (context?.refering) {
      passwordRef.current?.focus();
      if (emailRef.current && context.userInfo?.email) {
        emailRef.current.value = context.userInfo.email;
      }
    }
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const signinData: SigninData = {
      email: data.email as string,
      password: data.password as string,
    };
    try {
      const response = await signinUser(signinData);
      localStorage.setItem("token", response.accessToken);
      context?.setLogedIn(true);
      router.push("/courses");
    } catch (e: any) {
      console.log(e.message);
    }
  }

  return (
    <div className=" flex flex-col gap-8 font-Poppins">
      <p className="text-gray max-w-md ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form onSubmit={onSubmit}>
        <div className="pb-7">
          <label htmlFor="username" className="">
            Email
          </label>
          <div className="w-full  border mt-3 border-primary p-2 rounded-full ">
            <input
              ref={emailRef}
              placeholder="Enter your Email"
              name="email"
              type="text"
              className="placeholder:text-sm w-full py-1 bg-inherit outline-none px-4 tracking-wide text-slate-700"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="">
            Password
          </label>
          <div className="w-full  border mt-3 border-primary p-2 rounded-full relative ">
            <input
              ref={passwordRef}
              placeholder="Enter your Password"
              name="password"
              type={`${passwordTowgel ? "text" : "password"}`}
              className="placeholder:text-sm w-full py-1 bg-inherit outline-none px-4 tracking-wide text-slate-700"
            />
            <button
              onClick={() => setPasswordTowgel(!passwordTowgel)}
              type="button"
              title="toggle"
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >
              <Image
                src={passwordTowgel ? PasswordShow : PasswordHidden}
                alt=""
                width={20}
                height={20}
                className=""
              />
            </button>
          </div>
        </div>
        <div className="flex  pt-5 font-Poppins font-light">
          <div className="flex items-center h-5 ">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4    rounded   accent-primary  "
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <div className="w-full flex justify-end pt-4">
          <button
            type="submit"
            className="w-1/2 bg-primary text-white py-[9px] rounded-full mt-5 font-Poppins"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default React.memo(Signin);
