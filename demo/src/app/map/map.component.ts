import {Component, Input} from '@angular/core';
import {Required} from '../../../../dist';

@Component({
  selector: 'app-map',
  template: `
    <div>Latitude: {{latitude}}</div>
    <div>Longitude: {{longitude}}</div>
    <div *ngIf="zoom">Zoom: {{zoom}}</div>
  `,
})
export class MapComponent {
  @Input() @Required() latitude: number;
  @Input() @Required() longitude: number;
  @Input() zoom: number;
}
