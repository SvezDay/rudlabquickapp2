import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Location} from '@angular/common';
import {ApiService} from '../_core/api.service';
import {NavigationService} from '../_core/navigation.service';
import {UtilsService} from '../_core/utils.service';

@Component({
  moduleId: module.id
  , selector: 'app-games'
  , templateUrl: './games.component.html'
  , styleUrls: ['./games.component.scss', '../free/free.component.scss', '../app.component.scss']
  , providers:[ApiService, NavigationService, UtilsService]
})
export class GamesComponent implements OnInit {
  public recalls: any = [];
  public file: any = {name: ""};

  constructor(
    private api: ApiService
    , private Nav: NavigationService
    , private utils: UtilsService) { }

  ngOnInit() {
  }

  getSuspended(){
    this.api.query('get', `/api/games/suspended`).subscribe( data => {
        console.log(data)
        this.recalls = data.data;
    })
  }
  activation(ruid){
    let params = {recall:{uuid:ruid}, status:true};
    console.log(params)
    this.api.query('put', `/api/games-recall-one/recallStatus`, params).subscribe( () => {
      this.getSuspended();
    })
  }
  updateBrutData():void{
    this.api.query('put', `/api/games/update-brut-data`,{file:this.file.name}).subscribe( () => {
      console.log("done");
    })
  }

}
