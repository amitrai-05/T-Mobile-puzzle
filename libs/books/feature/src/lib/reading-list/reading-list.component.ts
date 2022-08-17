import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList,addToReadingList } from '@tmo/books/data-access';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  snackRef:any;
  constructor(private readonly store: Store,public readonly snackBar : MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.snackRef = this.snackBar.open('Book is removed from reading list','Undo',{duration:2500});
    this.snackRef.onAction().subscribe(()=>{
      const book = item;
      this.store.dispatch(addToReadingList({ book }));
    })
  }
}
