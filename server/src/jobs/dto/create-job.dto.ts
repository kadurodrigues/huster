import { IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty()
  title: string;
  
  @IsNotEmpty()
  description: string;
  
  @IsBoolean()
  isActive: boolean;
}