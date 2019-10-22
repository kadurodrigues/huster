import { Document } from 'mongoose';

export interface Job extends Document {
  readonly title: string;
  readonly description: string;
  readonly isActive: boolean;
}