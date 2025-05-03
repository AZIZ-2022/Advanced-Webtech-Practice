import { Controller,Get,Patch,Delete, Body, Headers,UsePipes,ValidationPipe,UnauthorizedException,} from '@nestjs/common';
import { UserService } from './user.service';
import { createuser } from 'src/user/user/DTO/user.dto';
import { Query, Post } from '@nestjs/common';

@Controller('profile')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('view')
  async viewProfile(@Headers('Authorization') authorizationHeader: string) {
    if (!authorizationHeader) {
      throw new UnauthorizedException('Authorization token is required');
    }

    const token = this.extractToken(authorizationHeader);
    return this.userService.viewProfile(token);
  }

  @Patch('update')
  @UsePipes(new ValidationPipe())
  async updateProfile(
    @Headers('Authorization') authorizationHeader: string,
    @Body() updateUserDto: createuser,
  ) {
    if (!authorizationHeader) {
      throw new UnauthorizedException('Authorization token is required');
    }

    const token = this.extractToken(authorizationHeader);
    return this.userService.updateProfile(token, updateUserDto);
  }


  @Post('delete/request')
  async requestDeleteProfile(@Headers('Authorization') auth: string) {
    if (!auth) throw new UnauthorizedException('Token required');
    const token = this.extractToken(auth);
    return this.userService.requestDeleteProfile(token);
  }



  @Delete('delete/confirm')
async confirmDeleteProfile(
  @Headers('Authorization') auth: string,
  @Query('otp') otp: string
) {
  if (!auth) throw new UnauthorizedException('Token required');
  if (!otp) throw new UnauthorizedException('OTP is required');
  const token = this.extractToken(auth);
  return this.userService.confirmDeleteProfile(token, otp);
}















  private extractToken(authorizationHeader: string): string {
    const parts = authorizationHeader.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      return parts[1];
    } else {
      throw new UnauthorizedException('Invalid token format');
    }
  }
}
