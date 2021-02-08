import { Component, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  userName?: string;
  @Output() searchOutput = new EventEmitter<any>();

  


 
  getUser() {
    this.searchOutput.emit(this.userName);
    this.userName = '';
  }
  constructor() { }

  ngOnInit(): void {}

}
