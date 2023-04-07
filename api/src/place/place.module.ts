import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';
import { PlaceSchema } from './schemas/place.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }])],
  controllers: [PlaceController],
  providers: [PlaceService],
})
export class PlaceModule {}
