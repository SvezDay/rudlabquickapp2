import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Location} from '@angular/common';
//SERVICE
import {NavigationService} from '../_core/navigation.service';
import {IntercomService} from '../_core/intercom.service';
import {UtilsService} from '../_core/utils.service';
import {ApiService} from '../_core/api.service';
//DIRECTIVE
import {LabelComponent} from '../_directives/label.directive';
//CLASS
import {SetGame} from '../_models/graph.class';


@Component({
  moduleId: module.id
  ,selector: 'app-games-recall-one'
  ,templateUrl: './games-recall-one.component.html'
  ,styleUrls: ['./games-recall-one.component.css', '../free/free.component.css', '../app.component.css']
  ,providers:[ApiService, NavigationService, UtilsService, IntercomService]
})
export class GamesRecallOneComponent implements OnInit {
  public currentSet: SetGame = new SetGame();
  private getAnswer: boolean = false;
  private nextSet = {};
  public noCard: boolean = false;
  private majBool: boolean = false;

  constructor(
    private api: ApiService
    , private Nav: NavigationService
    , private utils: UtilsService
    , private intercom: IntercomService) { }

  ngOnInit() {
    // console.log("check")
    this.run();
  }

  isEmptyObject(obj){
    return this.utils.isEmptyObject(obj);
  }
  toggleAnswer(){
    this.getAnswer = !this.getAnswer;
  }

  maj(){
    this.intercom.spinnerOn();
    this.api.query('get', '/api/games-recall-one/update-recall').subscribe( data => {
      this.majBool = true;
      this.run();
      this.intercom.spinnerOff();

    })
  }
  run(){
    this.getAnswer = false;
    this.api.query('get', '/api/games-recall-one/run').subscribe( data => {
      // console.log('data', data);
      if(data.data.hasOwnProperty('recall')){
        // this.noCard = false;
        this.currentSet = data.data;
        // this.currentSet = Object.assign(data.data[1], this.currentSet)
      }else{
        // Not enough card to play
        // So update recall once
        if(this.majBool){
          this.noCard = true;
        }else{
          this.maj();
        }
      }
    })
  }
  next(){
    this.getAnswer = true;
  }
  scoring(state){
    this.api.query('post', `/api/games-recall-one/scoring/${state}`, this.currentSet).subscribe( () => {
        this.run();
    })
  }
  recallStatus(status){
    this.api.query('put', `/api/games-recall-one/recallStatus`, {recall:this.currentSet.recall, status:status}).subscribe( () => {
        this.run();
    })
  }


}
