import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module.js';

// App root. Register feature modules here as they land.
@Module({
  imports: [
    HealthModule,
    // world, cities, military, movement, combat, economy, players, auth
  ],
})
export class AppModule {}
