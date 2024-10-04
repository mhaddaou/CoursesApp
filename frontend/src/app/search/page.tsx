"use client";
import NavBar from "@/components/main/Navbar";
import Search from "@/components/main/Search";
import SkeletonRepeat from "@/components/main/SkeletonRepeat";
import CourseCard from "@/components/sub/CourseCard";
import ToastError from "@/components/sub/ToastError";
import { Context } from "@/context/ContextProvider";
import { searchCourses } from "@/utils/restApi";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function SearchPage() {
  const context = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [scrollTrigger, isInView] = useInView();

  const res = async () => {
    try {
      setLoading(true);
      const res = await searchCourses({
        startIndex: context?.startIndex,
        itemPerPage: context?.itemPerPage,
        query: context?.searchInput,
        searchType: context?.searchType,
      });

      context?.setCoursesList(res);
      setIsLoad(false);
      setLoading(false);
    } catch (e: any) {
      setMessage(e.message);
      if ((e.message = "Invalid Token"))
        setMessage("you are not authorized you need to loggin first");
      setError(true);
    }
  };

  const handlClick = () => {
    res();
  };

  useEffect(() => {
    setLoading(true);
    if (loading) {
      if (loading) {
        context?.setStartIndex(context?.startIndex + context?.itemPerPage);
        context?.setCurrentPage(context.currentPage++);
        res();
      }
    }
  }, [isInView]);

  return (
    <div className="w-screen bg-secondary overflow-x-hidden min-h-screen ">
      {error && <ToastError msg={message} />}
      <NavBar />
      <div className="w-full flex justify-center pb-7 pt-12">
        <Search bool={true} handlClick={handlClick} />
      </div>
      <div className=" w-[90%] sm:w-[60%] md:w-full container py-8 grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {context?.coursesList?.data.map((course, index) => {
          return <CourseCard key={index} course={course} auth={true} />;
        })}
      </div>
      <div ref={scrollTrigger} className="  "></div>
      <div ref={scrollTrigger} className="  "></div>
      <div className="">{isLoad && <SkeletonRepeat />}</div>
    </div>
  );
}
