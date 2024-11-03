import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserState } from '../../store/user/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectUser } from '../../store/user/user.selectors';
import { UtilsUiService } from '../../shared/services/utils/utils-ui.service';
import { Specializations } from '../../store/application/application.actions';
import { Specialization } from '../../store/application/application.model';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrl: './patient-home.component.scss',
})
export class PatientHomeComponent implements OnInit {
  user$: Observable<UserState> | undefined;

  constructor(
    private store: Store<AppState>,
    private readonly utilsUiService: UtilsUiService
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe((val) => {
      console.log(val);
    });

    this.utilsUiService.getSpecializations().subscribe();
  }
}
