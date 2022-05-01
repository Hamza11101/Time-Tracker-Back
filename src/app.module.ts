import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeTrackerModule } from './TimeTracker/Time-Tracker.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot({ type: 'mysql',
  database: 'nestjs_time_tracker',
  username: 'root',
  password: 'hello123',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,}),TimeTrackerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
