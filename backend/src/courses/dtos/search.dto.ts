import { IsNumber, IsString } from 'class-validator';

export class SearchDto {
  @IsNumber()
  startIndex: number;

  @IsNumber()
  itemPerPage: number;

  @IsString()
  query: string;

  @IsString()
  searchType: 'title' | 'instructor';
}
