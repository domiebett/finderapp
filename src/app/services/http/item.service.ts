import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormatUtils } from '../../_utils/format.utils';

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
    const path = `items${FormatUtils.formatParams(params)}`;
    return this.http.get(path);
  }
}
