import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})

export class DWMSService {

  private apiUrl = environment.API_GATEWAY_URL;

  constructor(
    private cookieService: CookieService,
  ) { }
  private defaultPayload = {
    tenant_id: 20,
    system_id: 20
  };

  getMenu(customPayload?: any): Observable<any> {
    const payload = customPayload || this.defaultPayload;
    return new Observable(observer => {
      const token = this.cookieService.get('access_token');

      axios.post(`${this.apiUrl}/api/get_dwms_menu`, payload, {
        headers: {
          'Content-Type': 'application/json; charset= utf-8',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
