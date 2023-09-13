import { Component, Input } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {
  @Input() store:any;
  @Input() completeStore:any;
  
  addFolderOnClick(args:any){
    let a = window.prompt("Please enter name of the Folder");
    let newFolderObj:any;
    if(a==""){
      alert("Name cannot be empty!");
      this.addFolderOnClick(args);
    }else if(a==null){

    }else{
      newFolderObj = {
        id: uuid(),
        level: args.level+1,
        parentNodeId: args.id,
        name: a,
        type: "folder",
        visible: true,
        children: [],
      }
      args.children.push(newFolderObj);
      localStorage.setItem("store", JSON.stringify(this.completeStore));
    }
    
  }
  addFileOnClick(args:any){
    let a = window.prompt("Please enter name of the File");
    console.log(a);
    let newFolderObj:any;
    if(a==""){
      alert("Name cannot be empty!");
      this.addFileOnClick(args);
    }else if(a==null){
    }
    else{
      newFolderObj = {
        id: uuid(),
        level: args.level+1,
        parentNodeId: args.id,
        name: a,
        type: "file",
        visible: true,
        children: null,
      }
      args.children.push(newFolderObj);
      localStorage.setItem("store", JSON.stringify(this.completeStore));
      
    }
    
  }
  deleteClick(args:any){
    if(args.elem.id === -1){
      alert("Cannot delete root folder!");
      return;
    }
    if(args.store == null){
      args.store = this.completeStore;
    }
    args.store.forEach((el:any) => {
      if(el.id === args.elem.parentNodeId){
        for(let i=0 ; i<el.children.length; i++){
          if(el.children[i].id === args.elem.id){
            el.children.splice(i, 1);
          }
        }
        localStorage.setItem("store", JSON.stringify(this.completeStore));
        return;
      }
      if(el.children.length>0){
        this.deleteClick({store:el.children, elem:args.elem});
      }
    })
  }
  onRenameClick(args:any){
    let a = window.prompt("Please enter new name for file.");
    args.name = a;
    localStorage.setItem("store", JSON.stringify(this.completeStore));
  }
}