import { CourseInterface } from "@/context/interfaces/coursesInterface";
import Image from "next/image";
type SetStateModal = React.Dispatch<React.SetStateAction<boolean>>;
import { useRouter } from "next/navigation";
export default function CoursesModal({
  course,
  setModal,
  auth
}: {
  course: CourseInterface;
  setModal: SetStateModal;
  auth : boolean
}) {
    const router = useRouter();
    const handleNavigation = () => router.push('/auth')

  return (
    <div className=" min-h-screen   fixed z-50 top-0 left-0 w-screen h-screen backdrop-blur-3xl bg-black/40  flex justify-center items-center ">
     {
        auth ? ( 
        <div className="w-[450px] p-8   border-[3px] border-primary rounded-lg bg-white  mx-auto flex flex-col gap-4">
        <div className="w-full flex justify-end ">
          <button
            title="modal"
            type="button"
            className="-mr-4 pb-4"
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
        <div className="h-[200px]    rounded-lg relative">
          <Image
            src="/assets/images/BackgroundOne.jpeg"
            alt=""
            fill
            className="object-cover rounded-lg border border-blue-light"
          />
        </div>
        <div className="  flex flex-col gap-5">
          <h1 className="font-Poppins font-semibold text-xl w-[90%] text-[#252641] tracking-wide">
            {course.title}
          </h1>
          <p className="font-Poppins text-sm text-[#696984] tracking-wide ">
            {course.description}
          </p>
          <div className="flex flex-col gap-7 ">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary flex justify-center items-center ">
                <p className="text-white font-Poppins text-xl uppercase">
                  {course.instructor[0]}
                </p>
              </div>
              <h3 className="text-sm font-medium text-black tracking-wide capitalize">
                {course.instructor}
              </h3>
            </div>
            <p className="text-sm font-medium text-primary text-center tracking-wider">
              {course.schedule}
            </p>
          </div>
        </div>
      </div>) : <div className="bg-white p-8 rounded-md">
        <div className="w-full flex justify-end ">
          <button
            title="modal"
            type="button"
            className="-mr-4 pb-4"
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
            <h1 className="text-gray font-Poppins text-lg font-medium pb-8">You need to sign in to view this course</h1>
            <button className="w-full bg-primary py-2.5 rounded-md text-white font-Poppins font-medium text-lg tracking-wide" onClick={handleNavigation}>SignIn</button>
      </div>
     }
    </div>
  );
}
