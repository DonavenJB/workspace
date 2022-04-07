import { Controller, Get } from '@nestjs/common';
import { SHARED_VERSION } from '@empiryu/shared';

// Phase 0's only route.
@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      service: 'empiryu-server',
      sharedContract: SHARED_VERSION,
      time: new Date().toISOString(),
    };
  }
}
