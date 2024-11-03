import { ApplicationState } from './application/application.model';
import { UserState } from './user/user.model';

export interface AppState {
  user: UserState;
  application: ApplicationState;
}
