import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  // public maxId: number = this.svc.idCount - 1;
  public errorUser: boolean = false;

  public id: number = 1;
  public user: string = '';
  public pass: string = '';

  constructor(private svc: ConnectService, private router: Router, private routeParams: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeParams.params.subscribe({
      next: (data) => {
        this.id = data['id']
        this.getUserdetail();
      },
      complete: () => {}
    });
  }
  
  public getUserdetail() {
    this.svc.getUserDetail(this.id.toString()).subscribe({
      next: (data:any) => {
        this.user = data.username;
        this.pass = data.password;
      },
      error: () => {
        this.errorUser = true;
        alert('Invalid User ID');
        console.log('Invalid User ID');
      }
    });
  }

  public updateUser() {
    let obj = {
      "username": this.user,
      "password": this.pass
    };
    this.svc.EditUser(this.id.toString(),obj).subscribe({
      next: (data) => console.log(data),
      error: () => {
        alert('Server is down');
        console.log('Server is down');
      },
      complete: () => this.router.navigate(['allusers'])
    });
  }
  
  public cancelUser() {
    this.router.navigate(['allusers'])
  }

}
