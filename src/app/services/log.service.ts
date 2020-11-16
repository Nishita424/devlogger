import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];
  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated components',
        date: new Date('12/26/2020 12:54:23'),
      },
      {
        id: '2',
        text: 'Added bootstrap',
        date: new Date('10/26/2020 11:44:33'),
      },
      {
        id: '3',
        text: 'Added logs component',
        date: new Date('12/27/2020 13:54:23'),
      },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
