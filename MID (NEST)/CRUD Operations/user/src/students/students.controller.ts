import { Body, Controller, Delete, Get,Param,Patch,Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { validator } from  './DTO/validator.dto';
import { StudentsService } from './students.service';

@Controller('/students')
export class StudentsController {

    constructor(private readonly studentsService: StudentsService) {}  //Must

    
    @Post('/Insert')                          //Insert Operation
    @UsePipes(ValidationPipe)
    saveData(@Body()data){
        return this.studentsService.saveData(data)
        
    }


    @Get('Read') //Read All Data
    allData(){
        return this.studentsService.allData()
    }

    
    @Get(':id')    //Find a Specific ID
    getId(@Param('id')id){
        return this.studentsService.getId(id)
    }

    @Delete('DeleteByID/:id')  //Delete By Specific ID
    deleteID(@Param('id')id){
        return this.studentsService.deleteID(id)
    }


    @Patch('update/:id') //Data Update
        updateData(@Param('id')id , @Body()data){
            return this.studentsService.updateData(id,data)
        }

    


    
    @Post("/Profile")   //Validation Checking
    @UsePipes(ValidationPipe)
    getProfile(@Body() requestdata:validator){
        return requestdata

    }
}
