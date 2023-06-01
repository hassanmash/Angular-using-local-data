import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public id: number = this.svc.idCount;
  public user: string = '';
  public pass: string = '';

  constructor(private svc: ConnectService, private router: Router) { }

  ngOnInit(): void {
  }

  public addUser() {
    let obj = {
      "id": this.id,
      "username": this.user,
      "password": this.pass
    };
    this.svc.addUser(obj).subscribe({
      next: (data) => console.log(data),
      error: () => {
        alert('Server is down');
        console.log('Server is down');
      },
      complete: () => this.router.navigate(['allusers'])
    });
  }

}
