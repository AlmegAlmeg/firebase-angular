import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean
  tokenData: any
  constructor(private http: HttpClient) { 
    this.isLoggedIn = false
  }

  isAuth(){
    return this.isLoggedIn
  }

  login(email: string, password: string){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`,{
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap((data: any)=>{
      this.tokenData = data
      this.isLoggedIn = true
    }))
  }

  signup(email: string, password: string){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`,{
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
