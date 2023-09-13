import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faChevronRight, faFolderOpen, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  @Input() elem:any;
  faChevronRight = faChevronRight;
  faFolderOpen = faFolderOpen
  faFile = faFile
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() rename: EventEmitter<any> = new EventEmitter();
  onClickDelete(elem:any){
    console.log(elem);
    this.delete.emit({store: null,elem:elem});
  }
  onRenameClick(elem:any){
    let a = window.prompt("Please enter new name for file.");
    elem.name = a;
    this.rename.emit(elem);
  }
}
