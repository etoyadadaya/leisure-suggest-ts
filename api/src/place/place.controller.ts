import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlaceService } from './place.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './schemas/place.schema';

@Controller('places')
export class PlaceController {
  constructor(private placeService: PlaceService) {}

  @Get()
  async getAllPlaces(): Promise<Place[]> {
    return this.placeService.findAll();
  }

  @Post()
  async createPlace(
    @Body()
    place: CreatePlaceDto,
  ): Promise<Place> {
    return this.placeService.create(place);
  }

  @Get(':id')
  async getPlace(
    @Param('id')
    id: string,
  ): Promise<Place> {
    return this.placeService.findById(id);
  }

  @Put(':id')
  async updatePlace(
    @Param('id')
    id: string,
    @Body()
    place: UpdatePlaceDto,
  ): Promise<Place> {
    return this.placeService.updateById(id, place);
  }

  @Delete(':id')
  async deletePlace(
    @Param('id')
    id: string,
  ): Promise<Place> {
    return this.placeService.deleteById(id);
  }
}
