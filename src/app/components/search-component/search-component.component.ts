import { Component, Input } from '@angular/core';
import {  faFolderOpen, faFile} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
  @Input() store:any;
  search:string;
  searchResults:any = [];
  faFolderOpen = faFolderOpen;
  faFile = faFile;
  onSubmit(e:any, store:any){
    if(e.target.value === ""){
      this.searchResults = []
    }else{
      if(store == null){
        store = this.store;
      }
      store.forEach((el:any) => {
        if(el.name.includes(e.target.value)){
          if(this.searchResults.indexOf(el)==-1){
            this.searchResults.push(el);
          }
          
        }else{
          if(this.searchResults.indexOf(el)!=-1){
            let index = this.searchResults.indexOf(el);
            this.searchResults.splice(index, 1);
          }
        }
        if(el.children!=null && el.children.length>0){
          this.onSubmit(e, el.children);
        }
      })
    }
  }
}
