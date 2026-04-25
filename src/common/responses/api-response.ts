export class PaginationResult {
  constructor(
    public total: number,
    public page: number,
    public limit: number,
    public totalPages: number,
  ) {}

  static create(total: number, page: number, limit: number): PaginationResult {
    const totalPages = Math.ceil(total / limit);
    return new PaginationResult(total, page, limit, totalPages);
  }
}

export class ApiResponse<T = any> {
  constructor(
    public success: boolean,
    public data: T | null = null,
    public message: string = '',
    public errors: any[] = [],
    public pagination?: PaginationResult,
  ) {}

  static success<T>(
    data: T,
    message = 'Operación exitosa',
    pagination?: PaginationResult,
  ): ApiResponse<T> {
    return new ApiResponse(true, data, message, [], pagination);
  }

  static error(message: string, errors: any[] = []): ApiResponse {
    return new ApiResponse(false, null, message, errors);
  }
}
