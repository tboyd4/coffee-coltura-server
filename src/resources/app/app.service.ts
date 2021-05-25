import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  testGet(): string {
    return 'Server Responding --> Test Route';
  }
}
