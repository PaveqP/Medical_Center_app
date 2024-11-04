export interface Doctor {
  id: number;
  name: string;
  surname: string;
  middle_name: string | null;
  email: string;
  password: string;
  specialization: string;
  practice: number;
  rating: number;
  office: number;
  post: string;
  consultation_cost: number;
  department: string;
}

export interface Patient {
  name: string;
  surname: string;
  middle_name: string | null;
  email: string;
  password: string;
  age: number;
  gender: string;
  balance: number;
}

export type UserRole = 'Doctor' | 'Patient';

export interface UserState {
  user: Doctor | Patient | null;
  role: string | null;
  isAuth: boolean;
}
