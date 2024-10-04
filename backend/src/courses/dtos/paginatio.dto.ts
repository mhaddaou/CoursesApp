import { IsNumber } from 'class-validator';

export class PaginatioDto {
  @IsNumber()
  startIndex: number;
  
  @IsNumber()
  endIndex: number;
  
  @IsNumber()
  itemPerPage: number;
}
