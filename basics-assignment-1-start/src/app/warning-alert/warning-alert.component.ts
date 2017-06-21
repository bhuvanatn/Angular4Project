import {Component} from '@angular/core';
@Component({
    selector: 'app-warning-alert',
    template: `
    <p>This is warning danger!</p>
    `,
    styles: [
        `
    p {
    border: 1px solid blue;
    padding: 2px;
    background-color: red;
    }
  `
    ]
})
export class WarningAlertComponent{


}