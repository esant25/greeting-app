import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  FindUserInput,
  UpdateUserInput,
  UserInput,
} from './inputs/user.input';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(createUser: UserInput): Promise<User> {
    const user = new this.userModel(createUser);
    return user.save();
  }

  async findOne(user: FindUserInput): Promise<User> {
    return this.userModel.findById(user._id);
  }

  async update(updateUser: UpdateUserInput): Promise<User> {
    const user = await this.userModel.findOne(
      new Types.ObjectId(updateUser._id),
    );
    user.name = updateUser.name;
    user.updatedAt = new Date();
    return user.save();
  }

  async deleteUser(_id: string): Promise<any> {
    return await this.userModel.deleteOne({ _id: new Types.ObjectId(_id) });
  }
}
