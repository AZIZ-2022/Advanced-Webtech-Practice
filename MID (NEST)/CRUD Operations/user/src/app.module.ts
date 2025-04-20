import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './students/Student.entity';

@Module({
  imports: [StudentsModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'aziz123',
    database: 'test',
    entities: [
       student
    ],
    synchronize: true,
  })],




 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
