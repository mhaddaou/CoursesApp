"use client";

import NavBar from "@/components/main/Navbar";
import SkeletonRepeat from "@/components/main/SkeletonRepeat";
import CourseCard from "@/components/sub/CourseCard";
import ToastError from "@/components/sub/ToastError";
import { Context } from "@/context/ContextProvider";
import { paginationCourses } from "@/utils/restApi";
import { useEffect, useState, useContext } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const context = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const [scrollTrigger, isInView] = useInView();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const loadMoreCourses = async () => {
    try {
      setLoading(true);
      const response = await paginationCourses({
        startIndex: context?.startIndex,
        endIndex: context?.endIndex,
        itemPerPage: context?.itemPerPage,
      });
      context?.setCoursesList(response);
      setIsLoad(false);
      setLoading(false);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setMessage(e.message);
        if ((e.message = "Invalid Token"))
          setMessage("you are not authorized you need to loggin first");
        setError(true);
      } else {
        console.error('Unknown error', e);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    if (loading) {
      context?.setStartIndex(context?.startIndex + context?.itemPerPage);
      context?.setCurrentPage(context.currentPage++);
      loadMoreCourses();
    }
  }, [isInView]);

  return (
    <div className="w-screen bg-secondary overflow-x-hidden min-h-screen ">
      {error && <ToastError msg={message} />}
      <NavBar />
      <div className=" w-[90%] sm:w-[60%] md:w-full container py-8 grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {context?.coursesList?.data.map((course, index) => {
          return <CourseCard key={index} course={course} auth={true} />;
        })}
      </div>
      <div ref={scrollTrigger} className="  "></div>
      <div className="">{isLoad && <SkeletonRepeat />}</div>
    </div>
  );
}
