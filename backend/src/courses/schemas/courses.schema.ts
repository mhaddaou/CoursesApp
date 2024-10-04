import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Courses extends Document {
  @Prop({ required: true})
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  instructor: string;
  @Prop({ required: true })
  schedule: string;

  
}

export const CoursesSchema = SchemaFactory.createForClass(Courses);
