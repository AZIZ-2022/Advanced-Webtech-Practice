import {Controller,Post,Get,Patch,Delete,Body,Param,Headers,UnauthorizedException,UsePipes,ValidationPipe,Res} from '@nestjs/common';
import { CarService } from './car.service';
import { cardto } from 'src/car/car/DTO/car.dto';
import { user } from 'src/user/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from 'express';

@Controller('/car')
export class CarController {
  constructor(
    private readonly carService: CarService,
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

  @Post('add')
  @UsePipes(new ValidationPipe())
  async addCar(@Body() carDto: cardto, @Headers('authorization') authHeader: string) {
   
    await this.verifyToken(authHeader); 
    return this.carService.addCar(carDto);
  }

  @Get('all')
async getAllCars(
  @Headers('authorization') authHeader: string,
  @Res() res: Response,
) {
  await this.verifyToken(authHeader); 
  return this.carService.getAllCars(res);
}
  @Get(':id')
  async getCarById(@Param('id') id: number, @Headers('authorization') authHeader: string) {
    
    await this.verifyToken(authHeader); 
    return this.carService.getCarById(id);
  }

  @Patch(':id/update')
  @UsePipes(new ValidationPipe())
  async updateCar(
    @Param('id') id: number,
    @Body() carDto: cardto,
    @Headers('authorization') authHeader: string,
  ) {
    
    await this.verifyToken(authHeader); 
    return this.carService.updateCar(id, carDto);
  }

  @Delete(':id/delete')
  async deleteCar(@Param('id') id: number, @Headers('authorization') authHeader: string) {
   
    await this.verifyToken(authHeader);
    return this.carService.deleteCar(id);
  }



  @Get('stats/pdf')
  async getCarStatsPdf(@Headers('authorization') authHeader: string, @Res() res: Response) {
    await this.verifyToken(authHeader);
    return this.carService.generateCarStatsPDF(res);
  }
  




}
