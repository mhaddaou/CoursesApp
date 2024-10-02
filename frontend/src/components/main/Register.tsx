"use client";

import Image from "next/image";
import React, { FormEvent, useEffect } from "react";
import PasswordShow from "../../..//public/assets/icons/password-show.svg";
import PasswordHidden from "../../../public/assets/icons/password-hidden.svg";
import { useState } from "react";
import { signupUser } from "@/utils/restApi";
import { SignupData } from "@/utils/interfaces";

const Register = () => {
  const [passwordTowgel, setPasswordTowgel] = useState(false);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("is submitted");
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const signupData: SignupData = {
      username: data.username as string,
      email: data.email as string,
      password: data.password as string,
    };
    try{
      const response = await signupUser(signupData);
    }catch(e : any){
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
            Email Address
          </label>
          <div className="w-full  border mt-3 border-primary p-2 rounded-full ">
            <input
              placeholder="Enter your Email Address"
              name="email"
              type="email"
              className="placeholder:text-sm w-full py-1 bg-inherit outline-none px-4 tracking-wide text-slate-700"
            />
          </div>
        </div>
        <div className="pb-7">
          <label htmlFor="username" className="">
            User name
          </label>
          <div className="w-full  border mt-3 border-primary p-2 rounded-full ">
            <input
              placeholder="Enter your User name"
              name="username"
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

        <div className="w-full flex justify-end pt-4">
          <button
            type="submit"
            className="w-1/2 font-medium  tracking-wide bg-primary text-white py-[9px] rounded-full mt-5 font-Poppins"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Register);
