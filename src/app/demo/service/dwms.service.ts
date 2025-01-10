import { Injectable } from '@angular/core';
import axios from 'axios'; 
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class DWMSService {
  
  private apiUrl = `http://cdx3-gateway.eastus.azurecontainer.io/api/get_dwms_menu`;

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
      const token = this.cookieService.get('access_token');

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