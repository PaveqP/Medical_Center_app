export interface Specialization {
  id: number;
  name: string;
}

export interface ApplicationState {
  specializations: Specialization[];
  selectedSpecialization: Specialization | null;
}
