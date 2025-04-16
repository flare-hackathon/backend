import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Email of the user',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Name of the user', example: 'John Doe' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Wallet address of the user',
    example: '0x1234567890abcdef1234567890abcdef12345678',
  })
  @IsString()
  @IsNotEmpty()
  walletAddress: string;
}
