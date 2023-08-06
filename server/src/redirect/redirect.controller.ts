import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Redirect,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LinksService } from 'src/links/links.service';

@ApiTags('redirect')
@Controller('redirect')
export class RedirectController {
  constructor(private readonly linksService: LinksService) {}

  @Get(':shortUrl')
  @Redirect() // Використовуємо декоратор Redirect для перенаправлення
  async redirectToLongUrl(
    @Param('shortUrl') shortUrl: string,
  ): Promise<{ url: string }> {
    try {
      const longUrl = await this.linksService.getLongUrlByShortUrl(shortUrl);
      if (!longUrl) {
        throw new NotFoundException('Short URL not found.');
      }
      console.log(longUrl);
      return { url: longUrl }; // Повертаємо об'єкт з полем 'url', яке буде використовуватись для перенаправлення
    } catch (error) {
      console.error(error); // Виводимо помилку в консоль для детальнішої інформації
      throw new NotFoundException('Internal server error'); // Повертаємо помилку з більш конкретним повідомленням
    }
  }
}
