import { Module } from '@nestjs/common';
    import { TypeOrmModule } from '@nestjs/typeorm';
    import { TimeTrackerController } from './TimeTrackerController/time_tracker.controller';
    import { TimeTrackerService } from './TimeTrackerService/time_tracker.service';
    import { TimeTrackerEntity } from './Time_Tracker.entity';

    @Module({
      imports: [TypeOrmModule.forFeature([TimeTrackerEntity])],
      controllers: [TimeTrackerController],
      providers: [TimeTrackerService],
    })
    export class TimeTrackerModule {}
