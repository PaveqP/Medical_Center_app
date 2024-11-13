export interface IVisitsResponse {
  id: number;
  date: string;
  time: string;
  Id_doctor: number;
  id_patient: number;
  cost: string;
  reason: string;
  id_conclusion: null | number;
}

export interface IPatient {
  id: number;
  name: string;
  surname: string;
  middle_name: string | null;
  email: string;
  password: string;
  age: number;
  gender: string;
  balance: number;
  id_policy: number;
}

export interface IConsultationFull extends IVisitsResponse, IPatient {
  consultation: IVisitsResponse;
  patient: IPatient;
}
