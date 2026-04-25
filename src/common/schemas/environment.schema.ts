import * as Joi from 'joi';

/**
 * Schema de validación para variables de entorno usando Joi
 * Este schema se ejecuta al iniciar la aplicación y falla si alguna variable requerida no está presente
 * o no cumple con las validaciones definidas
 */
export const environmentSchema = Joi.object({
  PORT: Joi.number()
    .port()
    .default(8080)
    .description('Puerto HTTP del servidor'),

  APP_NAME: Joi.string()
    .description('Nombre de la aplicación'),
  // ==========================================
  // Configuración de CORS
  // ==========================================
  CORS_ORIGIN: Joi.string()
    .optional()
    .description('Orígenes permitidos para CORS (separados por coma)'),
})
  .unknown(true) // Permitir otras variables de entorno que puedan existir
  .messages({
    'any.required': '❌ Variable de entorno requerida: {{#label}}',
    'string.email': '❌ {{#label}} debe ser un email válido',
    'number.port': '❌ {{#label}} debe ser un puerto válido (1-65535)',
    'any.only': '❌ {{#label}} debe ser uno de: {{#valids}}',
  });

