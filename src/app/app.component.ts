import { Component } from '@angular/core';
import { LoginUiService } from './shared/services/login/login-ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'medical_center';

  constructor(private loginUiService: LoginUiService) {
    this.loginUiService.loadUserData();
  }
}
