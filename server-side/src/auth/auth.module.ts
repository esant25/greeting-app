import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({ 
      signOptions: { expiresIn: '3600s' }, 
      secret: 'some-secret' //not prepared for production, should be process.env.JWT_SECRET
    }),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
