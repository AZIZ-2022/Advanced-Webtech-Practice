import { Controller,Get } from '@nestjs/common';

@Controller('/teacher')
export class TeacherController {

    @Get("Result")
    getResult(){

       return "Good Grades"

    }
}
