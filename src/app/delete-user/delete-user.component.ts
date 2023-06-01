import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  public id: number = 0;
  public user:string = '';
  public pass: string = '';

  constructor(private svc: ConnectService, private router: Router, private routeParams: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeParams.params.subscribe({
      next: (data) => {
        this.id = data['id'];
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
        alert('Invalid User ID');
        console.log('Invalid User ID');
      }
    });
  }

  public deleteUser() {
    this.svc.DeleteUser(this.id.toString()).subscribe({
      next: (data) => console.log(data),
      error: () => {
        alert('Server is down');
        console.log('Server is down');
      },
      complete: () => this.router.navigate(['allusers'])
    });
  }

}
