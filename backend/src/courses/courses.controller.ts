import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { PaginatioDto } from './dtos/paginatio.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { SearchDto } from './dtos/search.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @UseGuards(AuthGuard)
  @Post()
  async getCourses(@Body() paginationData: PaginatioDto) {
    return await this.coursesService.PaginationCourses(paginationData);
  }

  @Get()
  async getAllCourses() {
    return await this.coursesService.getCourses();
  }

  @UseGuards(AuthGuard)
  @Post('create')
  async createCourse(@Body() createCourseData: CreateCourseDto) {
    return await this.coursesService.createCourse(createCourseData);
  }

  @UseGuards(AuthGuard)
  @Post('upload')
  async uploadCourses(@Body() courses: CreateCourseDto[]) {
    return await this.coursesService.uploadCourses(courses);
  }

    @UseGuards(AuthGuard)
    @Post('search')
    async courseSearch(@Body() search : SearchDto ){
        return await this.coursesService.courseSearch(search);
    }
}
