import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesResolver } from './countries.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from './country.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Country.name, schema: CountrySchema}])],
  providers: [CountriesResolver, CountriesService]
})
export class CountriesModule {}
