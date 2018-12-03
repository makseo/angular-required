Angular Required
==============

Angular 2+ decorator to make @Input required

### NPM

Install with npm:

```bash
npm install angular-required --save
```

### Usage example

For example, to display the map it is necessary to specify latitude and longitude.
If you forgot to specify one of the parameters, then you will see the corresponding error message in the console.

![alt text](https://raw.githubusercontent.com/makseo/angular-required/master/demo/src/assets/angular-required-error.png)

app.component.ts
```typescript
@Component({
  selector: 'app-root',
  template: '<app-map [latitude]="29.58"></app-map>',
})
export class AppComponent {}
```

map.component.ts
```typescript
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
```

