import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

/**
 * Repositorio para gestionar tokens FCM
 * Implementación actual: Firestore
 */
@Injectable()
export class TokenRepository {
  private readonly logger = new Logger(TokenRepository.name);

  constructor(
  ) {}
}

