import { Controller, Get, Post, Body, Res, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './interfaces/job.interface';
import { CreateJobDto } from './dto/create-job.dto';
import { Response } from 'express';

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
