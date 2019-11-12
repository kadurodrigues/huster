import { Injectable, Inject } from '@nestjs/common';
import { Job } from './interfaces/job.interface';
import { Model } from 'mongoose';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  constructor(@Inject('JOB_MODEL') private jobModel: Model<Job>) {}

  async create(job: CreateJobDto): Promise<Job> {
    const createJob = new this.jobModel(job);
    return await createJob.save();
  }

  async findAll(): Promise<Job[]> {
    return await this.jobModel.find().exec();
  }

  async findOne(id: string): Promise<Job | undefined> {
    return await this.jobModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<Job> {
    return await this.jobModel.findByIdAndRemove(id);
  }

  async update(id: string, item: any): Promise<Job> {
    return await this.jobModel.findByIdAndUpdate(id, item, { new: true });
  }
}