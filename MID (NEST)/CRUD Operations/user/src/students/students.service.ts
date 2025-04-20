import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { student } from './Student.entity';



@Injectable()
export class StudentsService {
    constructor(@InjectRepository(student) private myRepo: Repository<student>){}  //inject the repository of the Student entity into service
    

    //service creation for insertion
    saveData(data){
        this.myRepo.save(data)
    }

    //service creation for Data Read
    allData(){
       return this.myRepo.find()
    }

    getId(id){
        return this.myRepo.findOne({where:{id}})
    }

    deleteID(id){
         this.myRepo.delete(id)
        return "Deleted"
    }

    async updateData(id,data){
         
        const a = await this.myRepo.findOne({where:{id}})

        if(!a){
            return "ID Not Found"
        }

        else{
           const d = Object.assign(a,data)
           this.myRepo.save(d)
           return "Updated"

        }

    }


    getReply(){
        return 'Messi Is GOAT'
    }
}
