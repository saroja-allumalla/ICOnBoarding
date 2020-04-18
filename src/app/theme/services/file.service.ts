import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class FileService {
  apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = `${environment.apiUrl}api/file/`;
  }

  getDocumentName(prefix: string) {
    switch(prefix) {
      case 'DL': return "Driver's License"; break;
      case 'VR': return "Vehicle Registration"; break;
      case 'VI': return "Vehicle Insurance"; break;
      case 'BC': return "Background Check Report"; break;
      case 'DA': return "Drivers Abstract Report"; break;
      case 'WS': return "Worker Safety Insurance Board(WSIB) Document"; break;
      case 'VU': return "Vehicle Use Permission Letter"; break;
      case 'CC': return "Clearance Certificate"; break;
      case 'DD': return "Direct Deposit"; break;
      case 'VC': return "Void Cheque"; break;
      case 'LD': return "Lease Documents"; break;
      case 'VB': return "Vendor Broker Application"; break;
      case 'IC': return "Independant Contractor Agreement"; break;
      default: break;
    }
  }

  removeFile(tempid: string, prefix: string) {
    return this.http.get(`${this.apiUrl}delete/${tempid}F${prefix}`);
  }
}
