export interface CourseInterface {
    title: string;
    description: string;
    instructor: string;
    schedule: string;
  }


export interface CoursesList{
    totalPages : number;
    totalItems : number;
    data : CourseInterface[];
}