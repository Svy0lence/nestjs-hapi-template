import { Injectable, Logger } from '@nestjs/common';
import { TokenRepository } from 'src/repositories/token.repository';
import {
  RegisterTokenDto
} from 'src/controllers/dtos/register-token.dto';

/**
 * Service para gestión de suscripciones y notificaciones push
 * Contiene toda la lógica de negocio
 */
@Injectable()
export class SubscriptionService {
  private readonly logger = new Logger(SubscriptionService.name);

  constructor(
    private readonly tokenRepository: TokenRepository,
  ) {}

  /**
   * Guarda/actualiza un token FCM para un usuario en un sistema
   */
  async registerToken(dto: RegisterTokenDto): Promise<RegisterTokenDto> {
    
    return dto
  }

}

