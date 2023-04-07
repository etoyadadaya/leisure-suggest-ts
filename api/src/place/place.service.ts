import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Place } from './schemas/place.schema';

@Injectable()
export class PlaceService {
  constructor(
    @InjectModel(Place.name)
    private placeModel: mongoose.Model<Place>,
  ) {}

  async findAll(): Promise<Place[]> {
    const places = await this.placeModel.find();
    return places;
  }

  async create(place: Place): Promise<Place> {
    const res = await this.placeModel.create(place);
    return res;
  }

  async findById(id: string): Promise<Place> {
    const place = await this.placeModel.findById(id);

    if (!place) {
      throw new NotFoundException('Place not found.');
    }

    return place;
  }

  async updateById(id: string, book: Place): Promise<Place> {
    return this.placeModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Place> {
    return this.placeModel.findByIdAndDelete(id);
  }
}
