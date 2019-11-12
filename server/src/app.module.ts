import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    JobsModule
  ]
})
export class AppModule {}
