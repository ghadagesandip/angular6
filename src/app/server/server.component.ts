import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'server',
  templateUrl : './server.component.html',
  styleUrls : ['./server.component.css']
})

export class ServerComponent implements OnInit {

  serverId: number = 1234;
  status: string = 'Offline';
  allowAddServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';

  constructor(){
    setTimeout(()=>{
      this.allowAddServer = true;
    }, 3000)
  }

  ngOnInit(){

  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created and name is '+this.serverName
  }

  getServerStatus(){
    return this.status;
  }

  updateServerName(event: Event){
    this.serverName = event.target.value;
  }
}
