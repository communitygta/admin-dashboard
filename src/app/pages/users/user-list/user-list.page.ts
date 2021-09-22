import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  users$ = this.authService.getUsersByNeighbourhood();

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

}
