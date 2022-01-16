import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServiceProvidersModule } from './service-providers/service-providers.module';
import { ServiceCategoriesModule } from './service-categories/service-categories.module';
import { ServiceSubCategoriesModule } from './service-sub-categories/service-sub-categories.module';
import { ServicesModule } from './services/services.module';
import { PermissionsModule } from './permissions/permissions.module';
import { EntityModule } from './entity/entity.module';
import { UsersEntitiesModule } from './users-entities/users-entities.module';
import { AccountsModule } from './accounts/accounts.module';
import { AccountTypesModule } from './account-types/account-types.module';
import { ServiceProfilesModule } from './service-profiles/service-profiles.module';
import { ServiceProfileEntityModule } from './service-profile-entity/service-profile-entity.module';
import { AccountProvidersModule } from './account-providers/account-providers.module';
import { ProductsModule } from './products/products.module';
import { BeneficiariesModule } from './beneficiaries/beneficiaries.module';
import { BeneficiaryTypesModule } from './beneficiary-types/beneficiary-types.module';

console.log(`mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?readPreference=primary&appname=MongoDB%20Compass&ssl=false`);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://uniteydbadmin:UniDMduLv8J2uZ44LLNty@139.185.46.212:27017/uniteydb?authSource=admin`
      }),
      inject: [ConfigService],
    }),
    AuthModule, 
    RolesModule, 
    UsersModule, ServiceProvidersModule, ServiceCategoriesModule, ServiceSubCategoriesModule, ServicesModule,PermissionsModule, EntityModule, UsersEntitiesModule, AccountsModule, AccountTypesModule,ServiceProfilesModule, ServiceProfileEntityModule, AccountProvidersModule, ProductsModule, BeneficiariesModule, BeneficiaryTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
