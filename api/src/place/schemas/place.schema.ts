import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Place {
  @Prop()
  title: string;

  @Prop()
  link: string;

  @Prop()
  rating: string;

  @Prop()
  type: string;

  @Prop()
  address: string;

  @Prop()
  time: string;

  @Prop()
  metro: string;

  @Prop()
  phone: string;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
