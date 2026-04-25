import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import * as Joi from 'joi';
/**
 * DTO para guardar/actualizar token FCM
 */
export class RegisterTokenDto {
  @ApiProperty({
    description: 'ID del usuario',
    example: 'pvega',
    type: String
  })
  usuario: string;

  @ApiProperty({
    description: 'ID del sistema/frontend al que pertenece el token',
    example: 'portal-sistemas',
    type: String
  })
  sistema: string;
}

/**
 * Schema de validación Joi para RegisterTokenDto (save-token)
 */
export const RegisterTokenSchema = Joi.object<RegisterTokenDto>({
  usuario: Joi.string()
    .min(1)
    .max(100)
    .required()
    .messages({
      'string.base': 'El usuario debe ser un texto',
      'string.empty': 'El usuario no puede estar vacío',
      'string.min': 'El usuario debe tener al menos 1 carácter',
      'string.max': 'El usuario no puede tener más de 100 caracteres',
      'any.required': 'El usuario es requerido'
    }),
  sistema: Joi.string()
    .min(1)
    .max(100)
    .required()
    .messages({
      'string.base': 'El sistema debe ser un texto',
      'string.empty': 'El sistema no puede estar vacío',
      'string.min': 'El sistema debe tener al menos 1 carácter',
      'string.max': 'El sistema no puede tener más de 100 caracteres',
      'any.required': 'El sistema es requerido'
    }),
});

