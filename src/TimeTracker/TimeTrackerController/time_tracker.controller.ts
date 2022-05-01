import { Controller,Get,Post,Body,Param,HttpStatus } from '@nestjs/common';
import { TimeTrackerService } from '../TimeTrackerService/time_tracker.service';
import { TimeTrackerDTO } from '../Time-tracker.dto';



@Controller('time-tracker')
export class TimeTrackerController {
    constructor(private TimeTrackerService: TimeTrackerService) {}

    @Get('/time')
    async showAllPeriods() {
      const Tims =  await this.TimeTrackerService.showAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Periods fetched successfully',
        Tims
      };
    }

    @Post('/time')
    async createPeriod(@Body() data: TimeTrackerDTO) {
       const Tims = await this.TimeTrackerService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'New Periode created successfully',
        Tims
      };
    } 
}
