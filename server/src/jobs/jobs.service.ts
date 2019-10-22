import { Injectable, Inject } from '@nestjs/common';
import { Job } from './interfaces/job.interface';
import { Model } from 'mongoose';

@Injectable()
export class JobsService {
  constructor(@Inject('JOB_MODEL') private jobModel: Model<Job>) {}

  async createJob(job): Promise<Job> {
    const createJob = new this.jobModel(job);
    return await createJob.save();
  }

  async getAll(): Promise<Job[]> {
    return await this.jobModel.find().exec();
  }
}