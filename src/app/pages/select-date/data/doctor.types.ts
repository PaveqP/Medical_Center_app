export interface ITimeTable {
  id: number;
  day: string;
  start_time: string;
  end_time: string;
}

export interface IConsultation {
  id: number;
  date: string;
  time: string;
  Id_doctor: number;
  id_patient: number;
  cost: string;
  reason: string;
  id_conclusion: number | null;
}
