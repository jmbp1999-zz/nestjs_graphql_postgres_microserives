import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class FileProducerService {
  constructor(@InjectQueue('file-queue') private queue: Queue) {}

  async extractData(filePath: string) {
    await this.queue.add('extract-data', {
      filePath: filePath,
    });
  }
}
