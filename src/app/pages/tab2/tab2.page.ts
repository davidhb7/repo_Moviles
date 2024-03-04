import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  edadBase:number;


  constructor() {
    this.edadBase = 18;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    return;
  }

  subirEdad(){
    this.edadBase++;
  }

  restarEdad(){
    this.edadBase--;
  }

}
