import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrl: './login-header.component.scss',
  standalone: true,
  imports: [RouterModule],
})
export class LoginHeaderComponent {}
