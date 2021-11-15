import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  servers = [
    {
      name: 'Ragna',
      ipport: '176.57.181.42:28215'
    },
    {
      name: 'Island',
      ipport: '176.57.134.40:28915'
    },
    {
      name: 'Gen1',
      ipport: '176.57.181.148:29415'
    },
    {
      name: 'Gen2',
      ipport: '176.57.173.60:30915'
    },
    {
      name: 'Crystal',
      ipport: '176.57.181.163:29115'
    },
    {
      name: 'Aber',
      ipport: '176.57.174.211:30315'
    },   
    {
      name: 'Ext',
      ipport: '176.57.171.146:30315'
    },   
  ];
}
