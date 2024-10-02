import axios from 'axios';
import { LoginResponse, SignupData, User } from './interfaces';

const fetchUserData = async (): Promise<User> => {
  const response = await axios.get<User>('http://localhost:4000/auth/user');
  return response.data;
};

const signupUser = async (userData: SignupData): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>('http://localhost:4000/auth/signup', userData);
    return response.data;
  };

  export  { fetchUserData, signupUser };
  