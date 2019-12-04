import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { AdminService } from '../admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private admin: AdminService) { }

  /******************** HTTP Requests ********************/
  getData(url: string, params?: { [x: string]: any; }, backGroundUrls?: boolean): Observable<any> {
    if (backGroundUrls) {
      this.admin.backGroundUrls.push(environment.BASE_API_URL + url);
    }
    let _params = params ? { params: this.appendParams(params) } : {};
    return this.http.get<HttpClient>(environment.BASE_API_URL + url, _params);
  }

  postData(url: string, data: { [x: string]: any; }, backGroundUrls?: boolean): Observable<any> {
    // if (backGroundUrls) {
    //   this.admin.backGroundUrls.push(environment.BASE_API_URL + url);
    // }
    // let formData = this.appendFormData(data);
    return this.http.post<HttpClient>(environment.BASE_API_URL + url, data);
  }

  putData(url: string, data: { [x: string]: any; }, backGroundUrls?: boolean): Observable<any> {
    if (backGroundUrls) {
      this.admin.backGroundUrls.push(environment.BASE_API_URL + url);
    }
    let formData = this.appendFormData(data);
    return this.http.put<HttpClient>(environment.BASE_API_URL + url, formData);
  }

  patchData(url: string, data: { [x: string]: any; }, backGroundUrls?: boolean): Observable<any> {
    if (backGroundUrls) {
      this.admin.backGroundUrls.push(environment.BASE_API_URL + url);
    }
    let formData = this.appendFormData(data);
    return this.http.patch<HttpClient>(environment.BASE_API_URL + url, formData);
  }

  deleteData(url: string, id: string): Observable<any> {
    return this.http.delete<HttpClient>(environment.BASE_API_URL + url + '/' + id);
  }

  /******************** HTTP Formdata ********************/
  appendFormData(myFormData: { [x: string]: any; }): FormData {
    let fd = new FormData();
    for (let key in myFormData) {
      fd.append(key, myFormData[key]);
    }
    return fd;
  }

  /******************** HTTP Params ********************/
  appendParams(myParams: { [x: string]: any; }): HttpParams {
    let params = new HttpParams();
    for (let key in myParams) {
      params = params.append(key, myParams[key]);
    }
    return params;
  }

}
