import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  Redirect,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { ApiTags } from '@nestjs/swagger';
import { LinkEntity } from './entities/link.entity';

@ApiTags('link')
@Controller('link')
export class LinksController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly linksService: LinksService) {}

  @Get()
  async getAllLinks(): Promise<LinkEntity[]> {
    return this.linksService.getAllLinks();
  }

  @Post()
  createLink(@Body() createLinkDto: CreateLinkDto) {
    return this.linksService.create(createLinkDto);
  }

  @Get(':id')
  findOneLink(@Param('id') id: string) {
    return this.linksService.findOne(+id);
  }

  @Delete(':id')
  removeLink(@Param('id') id: string) {
    return this.linksService.remove(+id);
  }
}
