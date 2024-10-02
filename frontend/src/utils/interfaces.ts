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

// Define a type for the response from the login API
interface LoginResponse {
  token: string;
  user: User;
}

export type { User, SignupData, LoginResponse };
