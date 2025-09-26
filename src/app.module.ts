import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {dbConnectConfig} from "./config/db-connect.config";
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConnectConfig), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
