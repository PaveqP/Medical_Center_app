import { Component, OnInit } from '@angular/core';
import { LoginApiService } from './pages/login/services/login-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'medical_center';

  constructor(private loginApiService: LoginApiService) {}

  ngOnInit(): void {
    this.loginApiService.loadUserData();
  }
}
