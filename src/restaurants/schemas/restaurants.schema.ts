import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

const enum Category {
  FAST_FOOD = 'Fast Food',
  CAFE = 'Cafe',
  FINE_DINNING = 'Fine Dinning',
}

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  email: string;

  @Prop()
  phoneNo: string;

  @Prop()
  address: string;

  @Prop()
  category: Category;

  @Prop()
  image?: object[];
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
