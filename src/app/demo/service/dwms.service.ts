import { Injectable } from '@angular/core';
import axios from 'axios'; 
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class DWMSService {
  
  private apiUrl = `http://192.168.190.189:8081/api/LAB_DWMS/GetMenu`;

  constructor(
    private cookieService: CookieService, 
  ) {}
  private defaultPayload = {
    tenant_id: 20,
    system_id: 20
  };

  getMenu(customPayload?: any): Observable<any> {
    const payload = customPayload || this.defaultPayload;
    return new Observable(observer => {
      const token = this.cookieService.get('id_token');

      axios.post(`${this.apiUrl}`, payload, {
        headers: {
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