import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { StudentCreateDTO } from './dto/create-student.input';
import { StudentUpdateDTO } from './dto/update-student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}
  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  async createStudent(student: StudentCreateDTO): Promise<Student> {
    const std = this.studentRepository.create(student);
    return this.studentRepository.save(std);
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
