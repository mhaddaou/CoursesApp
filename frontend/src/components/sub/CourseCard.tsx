import { CourseInterface } from "@/context/interfaces/coursesInterface";
import Image from "next/image";
import { useState } from "react";
import CoursesModal from "./CoursesModal";

export default function CourseCard({ course, auth }: { course: CourseInterface, auth : boolean }) {
  const [modal, setModal] = useState(false);

  
  return (
    <div className="bg-white  py-10 rounded-xl w-full">
      {modal && <CoursesModal course={course} setModal={setModal} auth={auth} />}

      <div className="w-[80%]  mx-auto flex flex-col gap-4">
        <div className="h-[200px] w-full   rounded-lg relative">
          <Image
            src="/assets/images/backggroundSeven.jpeg"
            alt=""
            fill
            objectFit="cover"
            className="object-cover rounded-lg border border-blue-light"
          />
        </div>
        <div className="  flex flex-col gap-5">
          <h1 className="font-Poppins font-semibold text-xl  text-[#252641] tracking-wide line-clamp-1">
            {course.title}
          </h1>
          <p className="font-Poppins text-sm text-[#696984] tracking-wide line-clamp-2">
            {course.description}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary flex justify-center items-center ">
                <p className="text-white font-Poppins text-xl uppercase">
                  {course.instructor[0]}
                </p>
              </div>
              <h3 className="text-sm font-medium text-black tracking-wide capitalize">
                {course.instructor.split(" ")[0]}
              </h3>
            </div>
            <p className="text-sm font-medium text-primary">
              {course.schedule.split(" ")[0]}
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-secondary w-full md:w-fit hover:bg-primary transition-colors duration-500 ease-in-out text-gray py-2 px-4 text-sm rounded-lg "
              onClick={() => setModal(true)}
            >
              View Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
