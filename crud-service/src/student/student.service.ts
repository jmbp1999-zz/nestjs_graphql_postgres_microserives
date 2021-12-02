import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { StudentCreateDTO } from './dto/create-student.input';
import { StudentUpdateDTO } from './dto/update-student.input';
import { HttpService } from '@nestjs/axios';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    private httpService: HttpService,
  ) {}
  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  async createStudent(student: StudentCreateDTO): Promise<Student> {
    const std = this.studentRepository.create(student);
    const res = await this.studentRepository.save(std);
    return res;
    /*    if (res) {
      const res = await this.httpService
        .post(
          'http://localhost:3002/graphql',
          JSON.stringify({
            mutation: `{
        sendNotification(notification:{
          message:Student Created Successfully
          status:true
          crudType:Create
        }){
          message
        }
      }`,
          }),
        )
        .pipe(map((res) => res.data))
        .toPromise();
      console.log(res);
    }
    throw new NotFoundException(`Student Creation Failed`);*/
  }

  async updateStudent(student: StudentUpdateDTO): Promise<Student> {
    const std = this.studentRepository.create(student);
    return this.studentRepository.save(std);
  }
  async deleteStudent(id: number) {
    const student = this.studentRepository.findOne(id);
    if (student) {
      const res = await this.studentRepository.delete(id);
      if (res.affected === 1) {
        return student;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }
}
