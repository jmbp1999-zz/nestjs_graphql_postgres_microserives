import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, FileFilter } from './app.utils';
import { FileProducerService } from './file.producer.service';

@Controller()
export class AppController {
  constructor(private readonly fileProducerService: FileProducerService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('excel', {
      storage: diskStorage({
        destination: './upload',
        filename: editFileName,
      }),
      fileFilter: FileFilter,
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    await this.fileProducerService.extractData(file.path);
    return { message: 'File is Processing' };
  }
}
