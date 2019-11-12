import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './interfaces/job.interface';
import { CreateJobDto } from './dto/create-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}
  
  @Post()
  create(@Body() job: CreateJobDto) {
    this.jobsService.create(job);
  }

  @Get()
  findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  findById(@Param() params): Promise<Job> {
    return this.jobsService.findOne(params.id);
  }
}
