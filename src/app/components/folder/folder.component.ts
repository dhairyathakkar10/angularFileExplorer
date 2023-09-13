import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faChevronRight, faFolderOpen, faFile, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent {
  @Input() elem:any
  @Output() addFolder: EventEmitter<any> = new EventEmitter();
  @Output() addFile: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() rename: EventEmitter<any> = new EventEmitter();
  faChevronRight = faChevronRight;
  faFolderOpen = faFolderOpen;
  faFile = faFile;
  faAngleDown = faAngleDown;
  currentToddleIcon = faChevronRight;
  folderBtnClick(elem:any){
    // console.log("Folder : " ,elem);
    this.addFolder.emit(elem);
  }
  fileBtnClick(elem:any){
    console.log("File : " , elem)
    this.addFile.emit(elem)
  }
  onClickDelete(elem:any){
    console.log(elem);
    this.delete.emit({store: null,elem:elem});
  }
  onRenameClick(elem:any){
    this.rename.emit(elem);
  }
  toggle(elem:any){
    elem.children?.forEach((el:any) => {
      el.visible = !el.visible;
      if(el.type === "folder" && el.children.length>0){
        this.toggle(el.children);
      }
    })
  }
}
