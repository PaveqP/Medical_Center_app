import { Component, inject } from '@angular/core';
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { Day } from '../select-date.component';
import { IConsultation } from '../data/doctor.types';

@Component({
  selector: 'app-date-modal',
  templateUrl: './date-modal.component.html',
  styleUrl: './date-modal.component.scss',
})
export class DateModalComponent {
  protected readonly modalData: Day = inject(NZ_MODAL_DATA);
  protected timeSlots: IConsultation[] = [];
  private mockTimeSlot = {
    id: 0,
    date: '',
    time: '',
    Id_doctor: 0,
    id_patient: 0,
    cost: '',
    reason: '',
    id_conclusion: null,
  };

  constructor(private readonly modalRef: NzModalRef) {
    this.calculateTimeSlots();
  }

  calculateTimeSlots(): void {
    const endTime = Number(this.modalData.end_time?.split(':')[0]);
    const startTime = Number(this.modalData.start_time?.split(':')[0]);

    for (let i = startTime; i < endTime; i++) {
      const findTime = this.modalData.time?.find(
        (slot) => slot.time.split(':')[0] === i.toString()
      );
      if (findTime) {
        this.timeSlots.push(findTime);
      } else {
        this.timeSlots.push({
          ...this.mockTimeSlot,
          time: `${i < 10 ? '0' + i : i}:00`,
        });
      }
    }
  }
}
