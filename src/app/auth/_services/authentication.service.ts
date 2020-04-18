import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { HttpClient} from '@angular/common/http'
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthenticationService {

    constructor(private http: Http, private _http: HttpClient) {
    }

    login(email: string, password: string) {
        console.log(email);
        console.log(password);
        
        return this._http.post(`${environment.apiUrl}api/recruiter/login`, { username: email, password: password })
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            console.log(response);
            let user = response;
            console.log(user);
            user["token"]="fake-jwt-token"; 
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(user);
            }
        });
        

        /*
        return this.http.post('/api/authenticate', JSON.stringify({ email: email, password: password }))
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            console.log(response);
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(user);
            }
        });*/
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}