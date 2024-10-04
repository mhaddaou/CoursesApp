'use client'

import NavBar from "@/components/main/Navbar";
import SkeletonRepeat from "@/components/main/SkeletonRepeat";
import CourseCard from "@/components/sub/CourseCard";
import ToastError from "@/components/sub/ToastError";
import { Context } from "@/context/ContextProvider";
import { CourseInterface } from "@/context/interfaces/coursesInterface";
import { getCourses } from "@/utils/restApi";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoad, setIsLoad] = useState(true);
  const [data, setData] = useState<CourseInterface[]>([]);
  const [stop, setStop] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter()

  const handlMoreCourses = () => {
    const token = localStorage.getItem("token");
    if(token){
      setMessage('you need first to loggin');
      setError(true);
    }else{
      router.push('/courses')
    }
    
  }
  const getCoursesList = async () => {
    const response = await getCourses();
    setData(response);
    setIsLoad(false);
  }

  useEffect(() =>{
    if(stop){
      getCoursesList();
    }
    setStop(false);
  })

  return (
    <div className="w-screen bg-secondary overflow-x-hidden  min-h-screen">
    <NavBar />

    {error && <ToastError msg={message}/>}
    <div className=" w-[90%] sm:w-[60%] md:w-full container py-8 grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {data.map((course, index) => {
        return <CourseCard key={index} course={course} auth={false} />;
      })}
    </div>
    <div className="">{isLoad && <SkeletonRepeat />}</div>
    {
      !isLoad && <div className="w-full flex justify-center py-4">
      <button onClick={handlMoreCourses} className="bg-white px-6 py-3 rounded-md font-Poppins  font-medium tracking-wide capitalize">Display more courses</button>
    </div>
    }
  </div>
  );
}
