import { DoctorModel } from '../../shared/data/user.types';

export interface Specialization {
  id: number;
  name: string;
}

export interface ApplicationState {
  specializations: Specialization[];
  selectedSpecialization: Specialization | null;
  selectedDoctor: DoctorModel | null;
}
