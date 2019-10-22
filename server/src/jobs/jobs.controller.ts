import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}
  
  @Get()
  getAll(): string {
    return this.jobsService.getAll()
  }

  @Get(':id')
  getJob(): any {
    return this.jobsService.getJob()
  }
}
