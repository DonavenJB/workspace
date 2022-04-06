import { Module } from '@nestjs/common';
import { HealthController } from './health.controller.js';

// One module per domain. This is the pattern.
@Module({
  controllers: [HealthController],
})
export class HealthModule {}
