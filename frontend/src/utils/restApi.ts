import axios from "axios";
import {
  InterfaceSearch,
  LoginResponse,
  PaginationData,
  SigninData,
  SignupData,
  SignupResponse,
  User,
} from "./interfaces";
import { axiosInstance } from "./axiosInstance";
import { CourseInterface, CoursesList } from "@/context/interfaces/coursesInterface";

const fetchUserData = async (): Promise<User> => {
  const response = await axios.get<User>("http://localhost:4000/auth/user");
  return response.data;
};

const signupUser = async (userData: SignupData): Promise<SignupResponse> => {
  const response = await axiosInstance.post<SignupResponse>(
    "/auth/signup",
    userData
  );
  return response.data;
};

const signinUser = async (userData: SigninData): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>(
    "/auth/login",
    userData
  );
  return response.data;
};

const paginationCourses = async (
  paginationData: PaginationData
): Promise<CoursesList> => {
  const response = await axiosInstance.post("/courses", paginationData);
  return response.data;
};

const getCourses = async (): Promise<CourseInterface[]> => {
  const response = await axiosInstance.get<CourseInterface[]>("/courses");
  return response.data;
};

const createCourse = async (courseData: CourseInterface): Promise<CourseInterface> => {
  const response = await axiosInstance.post<CourseInterface>("/courses/create", courseData);
  return response.data;
}

const searchCourses = async (searchData: InterfaceSearch): Promise<CoursesList> => {
  const response = await axiosInstance.post<CoursesList>("/courses/search", searchData);
  return response.data;
}

export { fetchUserData, signupUser, signinUser, getCourses, paginationCourses, createCourse, searchCourses };
