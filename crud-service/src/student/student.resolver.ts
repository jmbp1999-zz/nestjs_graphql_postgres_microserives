import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student } from './entities/student.entity';
import { StudentService } from './student.service';
import { StudentCreateDTO } from './dto/create-student.input';
import { StudentUpdateDTO } from './dto/update-student.input';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [Student], { name: 'findAllStudents' })
  findAll() {
    return this.studentService.findAll();
  }

  @Mutation(() => Student, { name: 'createStudent' })
  create(@Args('studentInput') student: StudentCreateDTO) {
    return this.studentService.createStudent(student);
  }

  @Mutation(() => Student, { name: 'updateStudent' })
  update(@Args('studentUpdate') student: StudentUpdateDTO) {
    return this.studentService.updateStudent(student);
  }

  @Mutation(() => Student, { name: 'deleteStudent' })
  delete(@Args('id') id: number) {
    return this.studentService.deleteStudent(id);
  }
}
