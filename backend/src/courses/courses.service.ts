import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Courses } from './schemas/courses.schema';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dtos/create-course.dto';
import { PaginatioDto } from './dtos/paginatio.dto';
import { SearchDto } from './dtos/search.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Courses.name) private readonly coursesModel: Model<Courses>,
  ) {}

  async getCourses() {
    try {
      const startIndex = 0;
      const endIndex = 12;
      const data = await this.coursesModel
        .find()
        .skip(startIndex)
        .limit(endIndex);
      return data;
    } catch (e) {
      Logger.error(e);
    }
  }

  async PaginationCourses(paginationData: PaginatioDto) {
    try {
      const totalItems = await this.coursesModel.countDocuments({});
      const endIndex = Math.min(
        paginationData.startIndex + paginationData.itemPerPage,
        totalItems - 1,
      );
      const totlaPages = Math.ceil(totalItems / paginationData.itemPerPage);
      const data = await this.coursesModel
        .find()
        .skip(paginationData.startIndex)
        .limit(endIndex);
      return {
        totlaPages,
        totalItems,
        data,
      };
    } catch (e) {
      Logger.error(e.message);
    }
  }

  async createCourse(createCourseData: CreateCourseDto) {
    try {

      // create user document and save in mongodb

      return await this.coursesModel.create(createCourseData);
    } catch (e) {
      Logger.error(e.message);
    }
  }

  async uploadCourses(courses: CreateCourseDto[]) {
    try {
      return await this.coursesModel.insertMany(courses);
    } catch (e) {
      Logger.error(e.message);
    }
  }

  async courseSearch(searchDto: SearchDto) {
    try{
      const { startIndex, itemPerPage, query, searchType } = searchDto;

    const type = searchType === 'title' ? 'title' : 'instructor';

    const regex = new RegExp(query, 'i');

    const queryFilter: { title?: RegExp; instructor?: RegExp } = {};
    if (type === 'title') {
      queryFilter.title = regex; // Search by title
    } else if (type === 'instructor') {
      queryFilter.instructor = regex; // Search by teacher
    } else {
      throw new Error('Invalid searchType'); // Handle invalid searchType
    }

    const totalItems = await this.coursesModel
      .countDocuments(queryFilter)
      .exec();

    const endIndex = Math.min(startIndex + itemPerPage, totalItems - 1);

    const data = await this.coursesModel
      .find(queryFilter)
      .skip(startIndex)
      .limit(endIndex)
      .exec();
    return {
      totalItems,
      data,
    };
    }catch(e){
      Logger.error(e.message);
      throw new BadRequestException(e.message);
    }
    
  }
}
