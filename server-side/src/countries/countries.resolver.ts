import { UseGuards, ValidationPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CountriesService } from './countries.service';
import { CountryDto } from './dto/country.dto';
import {
  UpdateCountryInput,
  CountryInput as CreateCountryInput,
  FindCountryInput,
  RemoveCountryInput,
} from './inputs/country.input';

@Resolver('Country')
export class CountriesResolver {
  constructor(private readonly countriesService: CountriesService) {}

  @Mutation(() => CountryDto, { name: 'createCountry' })
  @UseGuards(JwtAuthGuard)
  create(@Args('createCountryInput', new ValidationPipe()) createCountryInput: CreateCountryInput) {
    return this.countriesService.create(createCountryInput);
  }

  @Query(() => [CountryDto], { name: 'findAllCountries' })
  findAll() {
    return this.countriesService.findAll();
  }

  @Query(() => CountryDto, { name: 'findCountryByID' })
  findOne(@Args('findCountryInput') findCountryInput: FindCountryInput) {
    return this.countriesService.findOne(findCountryInput);
  }

  @Mutation(() => CountryDto, { name: 'updateCountry' })
  @UseGuards(JwtAuthGuard)
  update(@Args('updateCountryInput') updateCountryInput: UpdateCountryInput) {
    return this.countriesService.update(updateCountryInput);
  }

  @Mutation(() => CountryDto, { name: 'removeCountryByID' })
  @UseGuards(JwtAuthGuard)
  remove(@Args('removeCountryInput') removeCoutryInput: RemoveCountryInput) {
    return this.countriesService.remove(removeCoutryInput);
  }
}
