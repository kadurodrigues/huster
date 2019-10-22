import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
  
  getAll(): string {
    return 'Return all jobs'
  }

  getJob(): any {
    return {
      id: '01',
      title: 'Front End Developer',
      description: 'This is a Front End Developer position',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular'
      ]
    }
  }
}