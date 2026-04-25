import { ApiPropertyOptional } from "@nestjs/swagger";

export class IPaginationRequest { 
   
    @ApiPropertyOptional({
        name: 'page',
        description: 'Pagina de registro',
        example: 1,
        required: false
    })
    page: number;

    @ApiPropertyOptional({
        name: 'limit',
        description: 'Cantidad de registros por página',
        example: 10,
        required: false
    })
    limit: number;
}