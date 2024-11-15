import { Component } from '@angular/core';
import { AuthHeaderComponent } from '../auth-header/auth-header.component';
import { LoginHeaderComponent } from '../login-header/login-header.component';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
  imports: [LoginHeaderComponent],
  standalone: true,
})
export class PageNotFoundComponent {}
