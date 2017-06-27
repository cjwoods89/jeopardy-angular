import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; //this is the response, data we are getting back
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';



@Injectable()
export class JeopardyDataService {

  private baseUrl: string = 'http://jservice.io/api/';  //the base url to the api
  

  constructor(private http: Http) { 
    // this.generateCredentials();
  }

  

  getRecords(endpoint:string): Observable<any>{
    let apiUrl = `${this.baseUrl}${endpoint}`;
    console.log(apiUrl);
    return this.http.get(apiUrl)
      .map(this.extractData)   // "maps" the success- show the results
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let results = res.json();
    return results || [];
  }

  private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            if(error.status === 0){
                errMsg = "Error connecting to API"
            }else{
                const errorJSON = error.json();
                errMsg = `${errorJSON.code} - ${errorJSON.message}`;
            } 
        }
        
        return Observable.throw(errMsg);
    }

}
