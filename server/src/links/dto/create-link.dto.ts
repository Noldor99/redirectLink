import { ApiProperty } from '@nestjs/swagger';

export class CreateLinkDto {
  @ApiProperty({
    example: 'https://example.com',
    description: 'Original long URL',
  })
  link_long: string;
}
