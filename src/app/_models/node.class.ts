import {HeadGraph} from './graph.class';
export class Uuid {
  pattern: "^(\w){8}-(\w){4}-(\w){4}-(\w){4}-(\w){12}$";
}
export class Index {
  uuid: string;
  model: string;
  setUuid(u:string){this.uuid=u};
  setModel(m:string){this.model=m};
  setIndex(u:string, m:string){this.uuid=u; this.model=m;}
  createIndex(obj){
    this.setIndex(obj.uuid, obj.model);
  }
  isEmpty(){
    return this.uuid == "" ? true : false
  }
  constructor(){this.uuid=""; this.model=""; }
}
export class Title {
  uuid: string;
  value: string;
  course:boolean;
  descendant:HeadGraph[]=[];
  setUuid(u:string){this.uuid=u};
  setValue(v:string){this.value=v};
  setCourse(c:boolean){this.course=c};
  setDescendant(d:HeadGraph[]){this.descendant=d};
  setTitle(u:string, v:string, c:boolean, d?:HeadGraph[]){
    this.setUuid(u); this.setValue(v); this.setCourse(c);
    typeof d !== 'undefined' ? this.setDescendant(d) : null
  }
  createTitle(obj){
    if(typeof obj.descendant !== 'undefined'){
      this.setTitle(obj.uuid, obj.value, obj.course, obj.descendant);
    }else{
      this.setTitle(obj.uuid, obj.value, obj.course);
    }
  }
  isEmpty(){
    return this.uuid == "" ? true : false
  }
  constructor(){this.uuid=""; this.value=""; this.course=false; this.descendant=[]; }
}
export class Note {
  uuid: string;
  value: string;
  code_label:number;
  descendant:HeadGraph[] = [];
  index?:number;
  setUuid(u:string){this.uuid=u};
  setValue(v:string){this.value=v};
  setLabel(l:number){this.code_label=l};
  setDescendant(d:HeadGraph[]){this.descendant=d};
  setIndex(i:number){this.index=i};
  setNote(u:string, v:string, l:number, d?:HeadGraph[]){
    this.setUuid(u); this.setValue(v); this.setLabel(l);
    typeof d !== 'undefined' ? this.setDescendant(d) : null
  }
  createNote(obj){
    if(typeof obj.descendant === 'undefined'){
      this.setNote(obj.uuid, obj.value, obj.code_label);
    }else{
      this.setNote(obj.uuid, obj.value, obj.code_label, obj.descendant);
    }
  }
  isEmpty(){
    return this.uuid === "" ? true : false
  }

  constructor(){this.uuid=""; this.value=""; this.code_label=0; this.descendant=[]; }
}
