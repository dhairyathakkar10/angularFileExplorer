import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrash,  faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  @Input() elem:any;
  faPencil = faPencil;
  faTrash = faTrash;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() rename: EventEmitter<any> = new EventEmitter();
  onClickDelete(elem:any){
    console.log(elem);
    this.delete.emit({store: null,elem:elem});
  }
  onRenameClick(elem:any){
    this.rename.emit(elem);
  }
}
