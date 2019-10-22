import { Controller, Get, Post, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './interfaces/job.interface';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}
  
  @Post()
  async createJob(@Body() job) {
    this.jobsService.createJob(job);
  }

  @Get()
  async getAll(): Promise<Job[]> {
    return this.jobsService.getAll()
  }
}
