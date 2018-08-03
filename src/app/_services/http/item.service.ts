import { Utils } from './../../_utils/utils';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  /**
   * Sends api request to retrieve items
   *
   * @param params
   */
  getItems(params = {}) {
    const path = `items${Utils.formatParams(params)}`;
    return this.http.get(path);
  }
}
