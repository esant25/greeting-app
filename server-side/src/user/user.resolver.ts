import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';

import { FindUserInput, UserInput, UpdateUserInput } from './inputs/user.input';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(()=>[UserDto])
 async users(){
    return this.userService.findAll()
 }

 @Mutation(()=>UserDto)
 async createUser(@Args('input') input: UserInput){
    return this.userService.create(input);
 }

 @Query(()=>UserDto)
 async findUser(@Args('input') input: FindUserInput){
    return this.userService.findOne(input)
 }

 @Mutation(()=>UserDto)
 async updateUser(@Args('input') input: UpdateUserInput){
    return this.userService.update(input);
 }

 @Mutation(()=>String)
 async deleteUser(@Args('input') input: FindUserInput) : Promise<any>{
    await this.userService.deleteUser(input._id);
    return "User removed";
 }
 
}
