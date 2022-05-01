import { Test, TestingModule } from '@nestjs/testing';
import { TimeTrackerController } from './time_tracker.controller';

describe('TimeTrackerController', () => {
  let controller: TimeTrackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeTrackerController],
    }).compile();

    controller = module.get<TimeTrackerController>(TimeTrackerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
