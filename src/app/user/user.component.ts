import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  users: User[] = [];
  newUser: User = { username: '', email: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  addUser() {
    this.userService.createUser(this.newUser).subscribe((user) => {
      this.users.push(user);
      this.newUser = { username: '', email: '' }; // Reset form
      this.loadUsers();
    });
  }
}
