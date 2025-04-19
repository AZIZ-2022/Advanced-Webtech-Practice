import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TeacherController } from './teacher/teacher.controller';

@Module({
  imports: [StudentsModule],
  controllers: [AppController, TeacherController],
  providers: [AppService],
})
export class AppModule {}
