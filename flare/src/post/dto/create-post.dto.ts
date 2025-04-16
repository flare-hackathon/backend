import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsString,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Title of the post', example: 'Casl Feature' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Content of the post',
    example: 'This is a sample post content.',
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({
    description: 'Indicates if the post is published',
    example: false,
  })
  @IsBoolean()
  published: boolean;

  @ApiProperty({
    description: 'IPFS hash of the post',
    example: 'QmT5NvUtoM5n...xyz',
  })
  @IsString()
  @IsNotEmpty()
  ipfsHash: string;

  @ApiProperty({
    description: "Author's wallet address",
    example: '0x1234567890abcdef1234567890abcdef12345678',
  })
  @IsString()
  @IsNotEmpty()
  authorAddress: string;

  @ApiProperty({ description: 'User  rating of the post', example: 5 })
  @IsOptional()
  @IsInt()
  userRating?: number;

  @ApiProperty({ description: 'AI rating ID for the post', example: 1 })
  @IsOptional()
  @IsInt()
  aiRatingId?: number;

  @ApiProperty({ description: 'Internal ID for the post', example: 1001 })
  @IsOptional()
  @IsInt()
  internal_id?: number;
}
