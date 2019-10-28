import { Injectable, Inject } from '@nestjs/common';
import { Job } from './interfaces/job.interface';
import { Model } from 'mongoose';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  constructor(@Inject('JOB_MODEL') private jobModel: Model<Job>) {}

  async createJob(job: CreateJobDto): Promise<Job> {
    const createJob = new this.jobModel(job);
    return await createJob.save();
  }

  async getAll(): Promise<Job[]> {
    return await this.jobModel.find().exec();
  }
}