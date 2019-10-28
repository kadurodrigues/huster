import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './interfaces/job.interface';
import { CreateJobDto } from './dto/create-job.dto';
import { Response } from 'express';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}
  
  @Post()
  async createJob(@Body() job: CreateJobDto, @Res() res: Response) {
    try {
      this.jobsService.createJob(job);
      res.status(201).send('User Created!')
    } catch (error) {
      throw error 
    }
  }

  @Get()
  async getAll(): Promise<Job[]> {
    return this.jobsService.getAll()
  }
}
