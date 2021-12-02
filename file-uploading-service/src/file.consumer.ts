import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import xlsx from 'xlsx';
@Processor('file-queue')
export class FileConsumer {
  @Process('extract-data')
  async dataExtractionJob(job: Job<unknown>) {
    const jobData: any = job.data;
    console.log('Starting...');
    const workbook = xlsx.readFile(jobData.filePath);
    console.log('Ending...');
    console.log(workbook);
  }
}
