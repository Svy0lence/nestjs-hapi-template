# Notification Broadcaster API

## Descripción

API Worker para gestión de notificaciones push web mediante Firebase Cloud Messaging y Firestore.

## Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd notification-broadcaster-api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de Firebase:

```env
# Firebase Configuration
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Private-Key\n-----END PRIVATE KEY-----\n"
FIREBASE_DATABASE_NAME=your-database-name

# Application Configuration
PORT=3000
LOG_LEVEL=info
```

## Uso

### Desarrollo

Ejecutar el servidor en modo desarrollo con recarga automática:

```bash
npm run dev
```

### Construcción

Compilar el proyecto TypeScript a JavaScript:

```bash
npm run build
```

### Producción

Ejecutar el servidor en modo producción:

```bash
npm start:prod
```

## Documentación

Para más información sobre configuración, arquitectura y detalles técnicos, consultar la [documentación completa](docs/configurations.md).

## Estructura del Proyecto

```
notification-broadcaster-api/
├── src/                    # Código fuente
│   ├── entities/          # DTOs de request y response
│   ├── integrations/      # Integración con APIs externas
│   ├── middleware/        # Middleware de contexto y trazabilidad
│   ├── publisher/         # Publicación de mensajes
│   ├── repositories/      # Acceso a datos
│   ├── services/          # Lógica de negocio
│   └── utils/            # Utilidades y configuración
├── tests/                 # Pruebas unitarias
├── docs/                  # Documentación
└── index.ts              # Punto de entrada
```

## Tecnologías

- **Node.js** + **TypeScript**
- **Hapi.js** - Framework web
- **Firebase Cloud Messaging** - Envío de notificaciones push
- **Firestore** - Base de datos NoSQL
- **TypeORM** - ORM para bases de datos relacionales
- **Joi** - Validación de datos

## Licencia

Propiedad de Interseguro
