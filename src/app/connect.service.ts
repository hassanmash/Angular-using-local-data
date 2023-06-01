import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  public url: string = "http://localhost:3000/users";
  public idCount: number = 0;
  
  constructor(private http: HttpClient) {
    http.get<any>(this.url).subscribe({
      next: (data) => { this.idCount = data[data.length - 1].id },
      error: (data) => console.log('Error Occured...'),
      complete: () => this.idCount++
    })
  }

  public GetAllUsers() {
    return this.http.get<any>(this.url);
  }
  
  public getUserDetail(id: string) {
    return this.http.get<any>(this.url + '/' + id);
  }

  public addUser(newUser: any) {
    this.idCount++;
    return this.http.post<any>(this.url,newUser);
  }
  public EditUser(id: string, user: any) {
    return this.http.put<any>(this.url + '/' + id,user);
  }
  public DeleteUser(id: string) {
    return this.http.delete<any>(this.url + '/' + id);
  }

}
