import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

@Input()
public characterList: Character[] = [{
  name:'Trunks',
  power:10
}]

@Output()
onDelete: EventEmitter<string> = new EventEmitter();

// onDeleteCharacter(index:number):void{
//   // TODO: Emitir el ID del personaje
//   this.onDelete.emit(index)
// }
deleteCharacterById(id?:string):void{
  // TODO: Emitir el ID del personaje
  if (!id) return;
  this.onDelete.emit(id)
}

}
