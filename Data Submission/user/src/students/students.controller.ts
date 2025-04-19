import { Body, Controller, Get,Post } from '@nestjs/common';

@Controller('/students')
export class StudentsController {


    @Post("/Profile")
    getProfile(@Body("name") requestdata:string){
       
       console.log(requestdata);
       
       
        return {success : true}

    }
}
