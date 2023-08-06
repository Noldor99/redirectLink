import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkEntity } from './entities/link.entity';
import { Repository } from 'typeorm';
import { nanoid } from 'nanoid';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(LinkEntity)
    private linkRepository: Repository<LinkEntity>,
  ) {}

  async getAllLinks(): Promise<LinkEntity[]> {
    return this.linkRepository.find();
  }

  async create(createLinkDto: CreateLinkDto) {
    const linkShort = await nanoid(6);
    const linkEntity = this.linkRepository.create({
      ...createLinkDto,
      link_short: linkShort,
    });
    return this.linkRepository.save(linkEntity);
  }

  async findOne(id: number) {
    const link = await this.linkRepository.findOne({
      where: { id },
    });
    return link;
  }

  async remove(id: number) {
    const link = await this.linkRepository.findOne({
      where: { id },
    });

    if (!link) {
      return null;
    }

    await this.linkRepository.remove(link);
    return link;
  }

  async getLongUrlByShortUrl(shortUrl: string): Promise<string> {
    const linkEntity = await this.linkRepository.findOne({
      where: { link_short: shortUrl },
    });

    if (!linkEntity) {
      throw new NotFoundException('Short URL not found.');
    }

    return linkEntity.link_long;
  }
}
