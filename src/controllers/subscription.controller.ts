import { Injectable } from '@nestjs/common';
import { SubscriptionService } from 'src/services/subscription.service';
import {
  RegisterTokenDto
} from './dtos/register-token.dto';
import { ApiResponse } from 'src/common/responses/api-response';
import { TrackingLogger } from 'src/common/logger/tracking.logger';

/**
 * Controlador para gestión de suscripciones y notificaciones push
 * Actúa como intermediario entre las rutas y el service
 */
@Injectable()
export class SubscriptionController {
  constructor(
    private readonly subscriptionService: SubscriptionService,
    private readonly trackingLogger: TrackingLogger
  ) {}
  /**
   * POST /subscription/register-token
   * Registra un token FCM para un usuario en un sistema
   */
  async registerToken(dto: RegisterTokenDto) {
    this.trackingLogger.log(`incio ${JSON.stringify(dto)}`)
    const response = await this.subscriptionService.registerToken(dto);
    return ApiResponse.success(response, 'Reponse exitoso')
  }

}
