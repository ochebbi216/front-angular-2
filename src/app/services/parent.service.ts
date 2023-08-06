import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parent } from '../parentLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient, private endpoint:EndpointService) { }

  registerParent (parent: any ){
 
    return this.http.post (this.endpoint.url + 'parent/',parent );
   }
  getbyid ( id: any ){
  
    return this.http.get (this.endpoint.url + 'parent/' + id);
   }
  //  getall ( ){
 
  //   return this.http.get(this.endpoint.url + 'parent');
  //  }
   getall(): Observable<Parent[]> {
    return this.http.get<Parent[]>(this.endpoint.url + 'parent');
  }
  }