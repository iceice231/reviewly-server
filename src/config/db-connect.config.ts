import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as process from 'node:process';
import { UserEntity } from '../entity/user.entity';
import { UserLevelEntity } from '../entity/user-level.entity';
import { UserFileEntity } from '../entity/user-file.entity';
import { CategoryEntity } from '../entity/category.entity';
import { RecordEntity } from '../entity/record.entity';
import { RecordFileEntity } from '../entity/record-file.entity';
import { ReviewEntity } from '../entity/review.entity';
import { ReviewFileEntity } from '../entity/review-file.entity';

dotenv.config();

export const dbConnectConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    UserEntity,
    UserLevelEntity,
    UserFileEntity,
    CategoryEntity,
    RecordEntity,
    RecordFileEntity,
    ReviewEntity,
    ReviewFileEntity,
  ],
  synchronize: false,
  logging: true,
};
