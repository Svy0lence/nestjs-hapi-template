import { Injectable } from '@nestjs/common';
import { TrackingLogger } from 'src/common/logger/tracking.logger';

/**
 * Repositorio para gestionar tokens FCM
 * Implementación actual: Firestore
 */
@Injectable()
export class TokenRepository {

  constructor(
  private readonly trackingLogger: TrackingLogger
    
  ) {}

  registerToken(dto: any){
    this.trackingLogger.log(`incio ${JSON.stringify(dto)}`)

    return dto;
  }
}

