import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CountryDocument = Country & Document;

@Schema()
export class Country {

  _id: string;

  @Prop({ required: true, unique: true })
  name: string;


  @Prop({ required: true, default: () => new Date() })
  createdAt: Date;

  @Prop({ required: false, default: null })
  updatedAt: Date;


}

export const CountrySchema = SchemaFactory.createForClass(Country);
