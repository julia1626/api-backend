// src/products/dto/update-product.dto.ts
import {IsString, IsNumber, IsNotEmpty, Min, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
    @Min(0)
    @IsOptional()
    price?: number;
}