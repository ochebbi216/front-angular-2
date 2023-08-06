import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from '../childMoldel.interface';
import { EndpointService } from './endpoint.service';
@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private http: HttpClient , private endpoint : EndpointService) { }
  create (child: any ){
 
   return this.http.post (this.endpoint.url + 'enfant/',child );
  }
 
  getall ( ){
 
   return this.http.get(this.endpoint.url + 'enfant');
  }
  getall2(): Observable<Child[]> {
    return this.http.get<Child[]>(this.endpoint.url + 'parent');
  }
  getByParentId ( id: any ){
 
   return this.http.get (this.endpoint.url + 'enfants/' + id);
  }
 
  delete ( id: any ){
 
   return this.http.delete (this.endpoint.url + 'enfant/' + id);
  }
 
 
  update ( id: any , child:any){
 
   return this.http.put (this.endpoint.url + 'child/update/' +id, child);
  }
}
