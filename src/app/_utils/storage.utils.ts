import { HttpLoginResponse } from '../_models/interfaces/auth';

export class StorageUtils {
  /**
   * Saves the token and the user sent by api login endpoint
   * 
   * @param { HttpLoginResponse } result - result that has been sent by apis login endpoint
   */
  static storeLoginDetails(result: HttpLoginResponse) {
    localStorage.setItem('access_token', result.token);
    localStorage.setItem('user', JSON.stringify(result.user));
  }
}
