import { Controller, Post,Get,Patch, Param, Body,Headers,UnauthorizedException,UsePipes, ValidationPipe} from '@nestjs/common';
import { BookingService } from './booking.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from 'src/user/user/user.entity';
import { BookingDto } from 'src/booking/booking/DTO/booking.dto';
import { ParseIntPipe } from '@nestjs/common';

@Controller('booking')
export class BookingController {
  constructor(
    private readonly bookingService: BookingService,

    @InjectRepository(user)
    private userRepo: Repository<user>,
  ) {}

   
    async verifyToken(authHeader: string): Promise<user> {
      if (!authHeader) {
        throw new UnauthorizedException('Authorization token is required');
      }
  
      
      const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
  
      const user = await this.userRepo.findOne({ where: { loginToken: token } });
      if (!user) {
        throw new UnauthorizedException('Invalid or missing token');
      }
  
      return user;
    }

  
  @Post('request')
  @UsePipes(new ValidationPipe())
  async requestBooking(@Body() body: BookingDto) {
    return this.bookingService.requestBooking(body);
  }


  @Patch('set-price/:id')
  async setPriceAndDistance(
    @Param('id', ParseIntPipe) id: number,
    @Headers('authorization') token: string,
    @Body() body: { distance: number },
  ) {
    await this.verifyToken(token); 
  
    return this.bookingService.setPriceAndDistance(id, body.distance);
  }






  
  @Get('requests')
  async getAllRequests(@Headers('authorization') token: string) {
    await this.verifyToken(token);
    return this.bookingService.getAllRequests();
  }

 
  @Patch('accept/:id')
  async acceptBooking(
    @Param('id') id: number,
    @Headers('authorization') token: string,
  ) {
    await this.verifyToken(token);
    return this.bookingService.acceptBooking(id);
  }

  
  @Patch('reject/:id')
  async rejectBooking(
    @Param('id') id: number,
    @Headers('authorization') token: string,
  ) {
    await this.verifyToken(token);
    return this.bookingService.rejectBooking(id);
  }

  @Get('showall')
  async showFullBookings(@Headers('authorization') authHeader: string) {
    await this.verifyToken(authHeader); 
    return this.bookingService.showFullBookings();
  }
  




}
