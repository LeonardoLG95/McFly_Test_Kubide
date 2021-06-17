import { Controller} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('notes')
export class AppController {
  constructor(private readonly appService: AppService) {}
}
