import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  public userList: any[] = [];

  constructor(private svc: ConnectService) { }

  ngOnInit(): void {
    this.getAll()
  }

  public getAll() {
    this.svc.GetAllUsers().subscribe({
      next: (data:any) => {
        this.userList = data;
      },
      error: () => {
        alert('Server is down');
        console.log('Server is down');
      },
      complete: () => console.log('Request Completed...')
    });
  }

}
