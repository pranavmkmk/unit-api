import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDTO } from './util/response.util';
import { ApiTags } from '@nestjs/swagger';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @ApiTags('Welcome')
  @Get()
  public async getHello() {
    return new ResponseDTO("Welcome to Unitey-Marketplace API V1.0");
  }
}
