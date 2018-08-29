import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {catchError, map, tap} from 'rxjs/operators';
import {_throw} from 'rxjs/observable/throw';
import { environment } from '../../environments/environment';

import {AuthenticationService} from './authentication.service';
import {IntercomService} from './intercom.service';


@Injectable()
export class ApiService {

  private api: any;

  constructor( private http: HttpClient, private auth: AuthenticationService){
    if(environment.production){
      this.api = 'https://rudlabquickapi.herokuapp.com';
    }else{
      this.api = 'http://localhost:3200';
    }

  }
  private handleError(error: any){
    console.log('error', error);
  }
  query(verb, route, ...param) {
    if(verb == 'get' || verb == 'delete'){
      return this.http[verb](`${this.api}${route}`, {headers: this.jwt(...param)})
      .pipe(
        tap( response => {
          // console.log("api service response", response)
          this.auth.storeSession(response);
          return response;
        }),
        catchError((e: any) => _throw(this.handleError(e)) )
        // catchError(this.handleError(e)) })
      );
    }else{
      return this.http[verb](`${this.api}${route}`, param[0] || {}, {headers: this.jwt()})
      .pipe(
        tap( response => {
          // console.log("api service response bis", response)
          this.auth.storeSession(response);
          return response;
        }),
        catchError((e: any) => _throw(this.handleError(e)) )
      );
    }
  };

  private jwt(...param) {
      // create authorization header with jwt token
      let token = localStorage.getItem('rudlab_token');
      let headers = new HttpHeaders().set('x-access-token', token);
      // console.log("api service by console ", param)
      if(param.length >= 1){
        for(let item in param[0]){
          // console.log("api service by console ", item)
          // console.log("api service by console ", param[0][item])
          headers = headers.set(item, param[0][item]);
        }
      //   for(let i = 0; i < param.length; i++){
      //     let k = Object.keys(param[0][i]);
      //     // headers = headers.set(k, param[0][k]);
      //   }
      }
      // console.log("api service by console headers", headers)
      return headers;
  };

};
