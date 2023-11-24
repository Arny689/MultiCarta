import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { DataDto } from '../services/data.dto';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css'],
  providers: [HttpServiceService]
})
export class GeoComponent implements OnInit {

  name: string
  data: DataDto

  constructor(private httpService: HttpServiceService) {
    this.name = ""
    this.data = {
      query: "",
      status: "",
      country: "",
      countryCode: "",
      region: "",
      regionName: "",
      city: "",
      zip: "",
      lat: "",
      lon: "",
      timezone: "",
      isp: "",
      org: "",
      as: ""
    }
  }

  ngOnInit(): void {
    const value = this.httpService.getCurrentDataByIp()
    value.subscribe({
      next: _ =>
      {
        this.data = _
      }
    })
  }

  sendIp() {
    const value = this.httpService.getDataByIp(this.name)
    value.subscribe({
      next: _ =>
      {
        this.data = _
      }
    })
  }
}
