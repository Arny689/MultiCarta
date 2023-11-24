import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataDto } from './data.dto';

@Injectable()

export class HttpServiceService {

  private path: string

  constructor(private http: HttpClient) { 
    this.path = 'http://ip-api.com/json/'
  }

  getDataByIp(ip: string): Observable<DataDto> {
    const data = this.http.get<DataDto>(`${this.path}${ip}`)
    console.log(`${this.path}${ip}`)
    return data
  }

  getCurrentDataByIp(): Observable<DataDto> {
    const data = this.http.get<DataDto>(`${this.path}`)
    return data
  }
}
