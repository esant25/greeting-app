import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/loginResponse.dto';
import { GqlAuthGuard } from './gql-auth.guard';
import { LoginUserInput } from './inputs/loginUser.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(()=>LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(@Args('loginUserInput') loginUserInput : LoginUserInput, @Context() context){
    return this.authService.login(context.user);
  }
}
