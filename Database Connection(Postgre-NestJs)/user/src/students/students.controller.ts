import { Body, Controller, Get,Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { validator } from  './DTO/validator.dto';

@Controller('/students')
export class StudentsController {

    
    @Post("/Profile")
    @UsePipes(ValidationPipe)
    getProfile(@Body() requestdata:validator){

       
        return requestdata

    }
}
