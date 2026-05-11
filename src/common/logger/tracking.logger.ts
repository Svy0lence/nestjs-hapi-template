import { ConsoleLogger, Inject, Injectable, Scope } from '@nestjs/common';
import { INQUIRER } from '@nestjs/core';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable({ scope: Scope.TRANSIENT })
export class TrackingLogger extends ConsoleLogger {
  constructor(
    private readonly requestContext: AsyncLocalStorage<{trackingId: string}>,
    @Inject(INQUIRER) private readonly parentClass: object,
  ) {
    super();
    
    const context = this.parentClass?.constructor?.name ?? 'App';
    this.setContext(context);
  }

  private getTrackingId(): string {
    return this.requestContext.getStore()?.trackingId ?? 'no-track';
  }

  log(message: string, options?: any) {
    super.log(`[${options?.trackingId ?? this.getTrackingId()}] ${message}`);
  }

  error(message: string, options?: any) {
    const trackingId = options?.trackingId ?? this.getTrackingId();
    super.error(`[${trackingId}] ${message}`, ...(options?.stack ? [options.stack] : []));

  }

  warn(message: string, options?: any) {
    super.warn(`[${options?.trackingId ?? this.getTrackingId()}]  ${message}`);
  }
}
