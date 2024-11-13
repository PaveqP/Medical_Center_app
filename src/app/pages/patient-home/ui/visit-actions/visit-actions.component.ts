import { Component } from '@angular/core';
import { PatientHomeUiService } from '../../services/patient-home-ui.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import { selectUser } from '../../../../store/user/user.selectors';
import { Patient } from '../../../../store/user/user.model';

@Component({
  selector: 'app-visit-actions',
  templateUrl: './visit-actions.component.html',
  styleUrl: './visit-actions.component.scss',
})
export class VisitActionsComponent {
  constructor(
    private readonly uiService: PatientHomeUiService,
    private readonly store: Store<AppState>
  ) {}

  createUserModal() {
    this.store.select(selectUser).subscribe((userData) => {
      this.uiService.createUserModal(userData.user as Patient);
    });
  }
}
