import { User } from './user';

export interface HttpLoginResponse {
    token: string;
    user: User;
}
