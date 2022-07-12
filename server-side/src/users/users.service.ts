import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, username: 'admin', password: 'admin' },
    { id: 2, username: 'user', password: 'user' },
  ];

  create(createUserInput: CreateUserInput): User {
    const user = {
      ...createUserInput,
      id: this.users.length + 1, //mock DB id
    };

    this.users.push(user);

    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
