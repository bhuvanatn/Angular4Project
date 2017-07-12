import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'BHU';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  OnCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event) {
    // console.log("I am eventvalue:", event.target.value);
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
