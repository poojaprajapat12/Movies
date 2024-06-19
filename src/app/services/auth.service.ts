import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(email:string , password:string){
    if(email == 'pooja@gmail.com' && password =='Test@123')
    {
      return 200
    }
    else
    return 403;
  }
}
