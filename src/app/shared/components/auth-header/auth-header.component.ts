import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { selectUser } from '../../../store/user/user.selectors';
import { UserUiService } from '../../services/user/user-ui.service';
import { Patient } from '../../../store/user/user.model';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss',
  standalone: true,
})
export class AuthHeaderComponent {
  constructor(
    private readonly store: Store<AppState>,
    private readonly uiService: UserUiService
  ) {}

  createUserModal() {
    this.store.select(selectUser).subscribe((userData) => {
      this.uiService.createUserProfileModal(userData.user as Patient);
    });
  }
}
