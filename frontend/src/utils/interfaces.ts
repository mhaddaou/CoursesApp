// Define a User type
interface User {
  id: number;
  username: string;
  email: string;
}

// Define a type for user registration
interface SignupData {
  email: string;
  username: string;
  password: string;
}

interface SigninData {
  email: string;
  password: string;
}

// Define a type for the response from the login API
interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

interface SignupResponse {
  message: string;
  email: string;
}

interface PaginationData {
  startIndex: number | undefined;
  endIndex: number | undefined;
  itemPerPage: number | undefined;
}


interface InterfaceSearch {
  startIndex: number | undefined;
  itemPerPage: number | undefined;
  query: string | undefined;
  searchType : string | undefined;
}


export type { User, SignupData, LoginResponse, SignupResponse, SigninData, PaginationData, InterfaceSearch };
