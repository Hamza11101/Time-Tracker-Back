import { Injectable,HttpStatus  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {TimeTrackerEntity} from '../Time_Tracker.entity';
import { TimeTrackerDTO } from '../Time-tracker.dto';

@Injectable()
export class TimeTrackerService {
    constructor(
        @InjectRepository(TimeTrackerEntity)
        private TimeRepository: Repository<TimeTrackerEntity>,
      ) {} 

      async showAll() {
        return await this.TimeRepository.find();
      }

      async create(data: TimeTrackerDTO) {
        const user = this.TimeRepository.create(data);
        await this.TimeRepository.save(data);
        return user;
      }
}
