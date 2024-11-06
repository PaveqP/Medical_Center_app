export interface IPatientVisitsResponse {
  id: number;
  date: string;
  time: string;
  Id_doctor: number;
  id_patient: number;
  cost: string;
  reason: string;
  id_conclusion: null | number;
}
