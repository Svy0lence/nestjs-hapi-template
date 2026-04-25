import { Injectable } from '@nestjs/common';
import { TokenRepository } from 'src/repositories/token.repository';
import {
  RegisterTokenDto
} from 'src/controllers/dtos/register-token.dto';
import { TrackingLogger } from 'src/common/logger/tracking.logger';

/**
 * Service para gestión de suscripciones y notificaciones push
 * Contiene toda la lógica de negocio
 */
@Injectable()
export class SubscriptionService {

  constructor(
    private readonly tokenRepository: TokenRepository,
    private readonly trackingLogger: TrackingLogger
  ) {}

  /**
   * Guarda/actualiza un token FCM para un usuario en un sistema
   */
  async registerToken(dto: RegisterTokenDto): Promise<RegisterTokenDto> {
    this.trackingLogger.log(`incio ${JSON.stringify(dto)}`)
    const response = await this.tokenRepository.registerToken(dto);
    throw new Error("prueba")
    return dto
  }

}

