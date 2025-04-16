import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(payload: CreatePostDto) {
    console.log(payload, 'payload');
    return await this.prisma.post.create({
      data: payload,
    });
  }

  async findAll() {
    return await this.prisma.post.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.post.findUnique({
      where: { id },
    });
  }

  async update(id: number, payload: UpdatePostDto) {
    return await this.prisma.post.update({
      where: { id },
      data: payload,
    });
  }

  async remove(id: number) {
    return await this.prisma.post.delete({
      where: { id },
    });
  }
}
