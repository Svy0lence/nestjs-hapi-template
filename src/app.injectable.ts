import { InjectDependencies } from './common/decorators/inject-dependencies.decorator';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TrackingLogger } from './common/logger/tracking.logger';
import { AsyncLocalStorage } from 'async_hooks';
import { TrackingInterceptor } from './common/interceptors/tracking-id.middleware';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { environmentSchema } from './common/schemas/environment.schema';

// Rutas y controladores para Push Notification API
import { SubscriptionRoute } from './routes/subscription.route';
import { SubscriptionController } from './controllers/subscription.controller';

// Servicios e Integraciones
import { SubscriptionService } from './services/subscription.service';
import { TokenRepository } from './repositories/token.repository';
import { AllExceptionsFilter } from './common/interceptors/all-exceptions.filter';

@InjectDependencies({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: environmentSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
    }),
  ],
  routes: [SubscriptionRoute],
  services: [
    SubscriptionService,
    TokenRepository,
    TrackingLogger,
    {
      provide: AsyncLocalStorage,
      useValue: new AsyncLocalStorage<any>(),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TrackingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter, // ✅ BIEN: Nest se encarga de la instancia
    },
  ],
  controllers: [SubscriptionController]
})
export class AppInjectable {}
