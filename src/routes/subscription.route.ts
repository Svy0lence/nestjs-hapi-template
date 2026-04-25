import { Post, Body, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Routes } from 'src/common/decorators/route.decorator';
import { SubscriptionController } from 'src/controllers/subscription.controller';
import { JoiValidationPipe } from 'src/common/pipes/joi-validation.pipe';
import {
  RegisterTokenDto,
  RegisterTokenSchema,
} from 'src/controllers/dtos/register-token.dto';

/**
 * Rutas para gestión de notificaciones push FCM
 */
@ApiTags('subscription')
@Routes('subscription')
export class SubscriptionRoute {
  constructor(private readonly controller: SubscriptionController) {}

  /**
   * Guarda o actualiza un token FCM para un usuario en un sistema
   */
  @Post('hello-world')
  @UsePipes(new JoiValidationPipe(RegisterTokenSchema))
  @ApiOperation({
    summary: 'Guarda o actualiza un token FCM para recibir notificaciones push',
    description: 'Si se proporciona un ID, actualiza el token existente. Si no, crea un nuevo registro. Retorna el documento completo para guardarlo en localStorage.',
  })
  @ApiResponse({
    status: 200,
    description: 'Token guardado/actualizado exitosamente. Retorna el documento completo.',
    type: Object,
  })
  async registerToken(@Body() body: RegisterTokenDto) {
    return await this.controller.registerToken(body);
  }
}
