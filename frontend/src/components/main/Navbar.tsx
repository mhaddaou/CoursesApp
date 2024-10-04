import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import CreateCourse from "../sub/CreateCourse";
import SuccessCourse from "../sub/SuccessCourse";
import { Context } from "@/context/ContextProvider";
import Search from "./Search";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function NavBar() {
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const context = useContext(Context);
  const pathName = usePathname();
  const [token, setToken] = useState("");
  const [toggle, setToggel] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    setToken(token || "");
  });
  return (
    <div className="w-screen bg-white">
      <div
        className={` lg:hidden w-screen  z-[999] bg-black  backdrop-blur-3xl  ${
          toggle ? "h-screen fixed top-0 left-0 " : "h-fit"
        }`}
      >
        <div className="w-full py-6 flex justify-between container">
          <div className="w-full flex items-center justify-between">
            <div>
              <Image
                src="/assets/icons/dark-logo.svg"
                alt="nice"
                width={60}
                height={10}
              />
            </div>
            <button
              title="button"
              type="button"
              onClick={() => setToggel(!toggle)}
            >
              {toggle ? (
                <Image
                  src="/assets/icons/closeWhite.svg"
                  alt="nice"
                  className="pt-1"
                  width={35}
                  height={20}
                />
              ) : (
                <Image
                  src="/assets/icons/menu.svg"
                  alt="nice"
                  className="pt-1"
                  width={35}
                  height={20}
                />
              )}
            </button>
          </div>
        </div>
        <div className={`${toggle ? "block" : "hidden"} `}>
          <ul
            className="flex flex-col  lg:flex-row font-Poppins items-center gap-12 text-gray "
            onClick={() => setToggel(!toggle)}
          >
            <li className="tracking-wider">
              <Link
                href="/courses"
                onClick={() => {
                  context?.setCoursesList(null);
                  context?.setStartIndex(0);
                }}
              >
                Home
              </Link>
            </li>
            <li>{!pathName.includes("search") && <Search bool={false} />}</li>
            {token && (
              <li className="tracking-wider bg-primary text-base text-white px-2 py-2 rounded-md">
                <button onClick={() => setModal(true)}>Create Course</button>
              </li>
            )}
            <li>
              <Image
                src="/assets/icons/user.svg"
                alt=""
                width={45}
                height={45}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:flex hidden flex-col  gap-12 lg:flex-row  w-full container justify-between items-center py-4">
        <div>
          <Image
            src="/assets/icons/dark-logo.svg"
            alt="nice"
            width={80}
            height={10}
          />
        </div>
        <div>
          <ul className="flex flex-col  lg:flex-row font-Poppins  items-center gap-12 text-gray ">
            <li className="tracking-wider">
              <Link
                href="/courses"
                onClick={() => {
                  context?.setCoursesList(null);
                  context?.setStartIndex(0);
                }}
              >
                Home
              </Link>
            </li>
            <li>{!pathName.includes("search") && <Search bool={false} />}</li>
            {token && (
              <li className="tracking-wider bg-primary text-base text-white px-2 py-2 rounded-md">
                <button onClick={() => setModal(true)}>Create Course</button>
              </li>
            )}
            <li>
              <Image
                src="/assets/icons/user.svg"
                alt=""
                width={45}
                height={45}
              />
            </li>
          </ul>
        </div>
      </div>
      {modal && (
        <div className="w-screen h-screen fixed z-30 top-0 left-0 backdrop-blur-3xl bg-secondary/30">
          {success ? (
            <SuccessCourse />
          ) : (
            <CreateCourse setModal={setModal} setSuccess={setSuccess} />
          )}
        </div>
      )}
    </div>
  );
}
