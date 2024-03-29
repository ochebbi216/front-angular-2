import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient , private endpoint : EndpointService) { }
  create (test: any ){
 
   return this.http.post (this.endpoint.url + 'test/',test );
  }
 
  getall ( ){
 
   return this.http.get(this.endpoint.url + 'test');
  }
 
  getbyid ( id: any ){
 
   return this.http.get (this.endpoint.url + 'test/' + id);
  }
  delete ( id: any ){
 
    return this.http.delete (this.endpoint.url + 'test/' + id);
   }
  
  update ( id: any , child:any){
  
    return this.http.put (this.endpoint.url + 'test/' +id, child);
   }
}
