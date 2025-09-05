// src/products/dto/create-product.dto.ts
import {IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
    @Min(0) // O preço não pode ser negativo
    price: number;
}