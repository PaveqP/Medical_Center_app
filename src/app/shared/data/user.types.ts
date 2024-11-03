export type PayloadSpecialization = {
  specialization: string;
};

export interface DoctorModel {
  id: number;
  name: string;
  surname: string;
  middle_name: string;
  email: string;
  password: string;
  id_specialization: number;
  practice: string;
  rating: string;
  office: number;
  id_post: number;
  consultation_cost: string;
  department: string;
}

export type DoctorsResponse = DoctorModel[];
