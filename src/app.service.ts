import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  new(): string {
    return 'New message!';
  }
  all(): string {
    return 'All messages!';
  }
  one(): string {
    return 'One note!';
  }
  favourite(): string {
    return 'Marked message as favourite!';
  }
  favourites(): string {
    return 'All messages marked as favourites!';
  }
}
