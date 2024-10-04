import { CourseInterface } from "@/context/interfaces/coursesInterface";
import { createCourse } from "@/utils/restApi";
import Image from "next/image";
import { FormEvent } from "react";

type SetStateType = React.Dispatch<React.SetStateAction<boolean>>;

export default function CreateCourse ({setSuccess, setModal} : {setSuccess : SetStateType , setModal : SetStateType}) {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const courseData: CourseInterface = {
          title: data.title as string,
          description: data.description as string,
          instructor: data.instructor as string,
          schedule: data.schedule as string,
        };
        const response = await createCourse(courseData);
        if (response) {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            setModal(false);
          }, 800);
        }
    
        try {
        } catch (e: any) {
          console.log(e.message);
        }
      }
    return (
        <div className="w-full h-full flex justify-center items-center ">
        <div className="bg-white w-full  lg:w-1/2 rounded-lg py-6">
          <div className="flex w-full justify-end">
            <button
              title="modal"
              type="button"
              className="pr-2 pb-4"
              onClick={() => setModal(false)}
            >
              <Image
                src="/assets/icons/close.svg"
                alt=""
                width={35}
                height={35}
              />
            </button>
          </div>
          <div className="w-[80%] mx-auto">
            <form onSubmit={onSubmit}>
              <div className="pb-7">
                <label htmlFor="username" className="">
                  Title
                </label>
                <div className="w-full  border mt-3 border-primary p-2 rounded-full ">
                  <input
                    required
                    placeholder="Enter Title"
                    name="title"
                    type="text"
                    className="placeholder:text-sm w-full py-1 bg-inherit outline-none px-4 tracking-wide text-slate-700"
                  />
                </div>
              </div>
              <div className="pb-7">
                <label htmlFor="username" className="">
                  Description
                </label>
                <div className="w-full  border mt-3 border-primary p-2 rounded-full ">
                  <input
                    placeholder="Enter Description"
                    required
                    name="description"
                    type="text"
                    className="placeholder:text-sm w-full py-1 bg-inherit outline-none px-4 tracking-wide text-slate-700"
                  />
                </div>
              </div>
              <div className="pb-7">
                <label htmlFor="username" className="">
                  instructor
                </label>
                <div className="w-full  border mt-3 border-primary p-2 rounded-full ">
                  <input
                    required
                    placeholder="Enter Instructor"
                    name="instructor"
                    type="text"
                    className="placeholder:text-sm w-full py-1 bg-inherit outline-none px-4 tracking-wide text-slate-700"
                  />
                </div>
              </div>
              <div className="pb-7">
                <label htmlFor="username" className="">
                  Schedule
                </label>
                <div className="w-full  border mt-3 border-primary p-2 rounded-full ">
                  <input
                    required
                    placeholder="Enter Schedule"
                    name="schedule"
                    type="text"
                    className="placeholder:text-sm w-full py-1 bg-inherit outline-none px-4 tracking-wide text-slate-700"
                  />
                </div>
              </div>

              <div className="w-full flex justify-end pt-4">
                <button
                  type="submit"
                  className="w-full lg:w-1/2 bg-primary text-white py-[9px] rounded-full mt-5 font-Poppins"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}