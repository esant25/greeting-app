import { UserInputError } from 'apollo-server-express';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Country, CountryDocument } from './country.schema';
import {
  UpdateCountryInput,
  CountryInput,
  FindCountryInput,
  RemoveCountryInput,
} from './inputs/country.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<CountryDocument>,
  ) {}

  async create(createCountryInput: CountryInput): Promise<Country> {
    const country = new this.countryModel(createCountryInput);
    return country.save();
  }

  async findAll(): Promise<Country[]> {
    return await this.countryModel.find().exec();
  }

  async findOne(findCountryInput: FindCountryInput): Promise<Country> {
    const country = await this.countryModel.findById({ _id: findCountryInput._id });
    if (!country) {
      throw new UserInputError(
        `Country with ID ${findCountryInput._id} not found.`,
      );
    }
    return country;
  }

  async update(updateCountryInput: UpdateCountryInput): Promise<Country> {
    const country = await this.countryModel.findOne(
      new Types.ObjectId(updateCountryInput._id),
    );
    if (!country) {
      throw new UserInputError(
        `Country with ID ${updateCountryInput._id} not found.`,
      );
    }
    country.name = updateCountryInput.name;
    country.updatedAt = new Date();
    return country.save();
  }

  async remove(removeCountryInput: RemoveCountryInput): Promise<String> {
    const country = await this.countryModel.findByIdAndRemove({
      _id: removeCountryInput._id,
    });
    if (!country) {
      throw new UserInputError(
        `Country with ID ${removeCountryInput._id} not found.`,
      );
    }
    return `${removeCountryInput._id} removed`;
  }
}
