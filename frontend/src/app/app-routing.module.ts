import { AppComponent } from './app.component';
import { ViewBooksComponent } from './components/view-books/view-books.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add/books', component: AddBookComponent },
  { path: 'edit/boobs', component: EditBookComponent },
  { path: 'view/books', component: ViewBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
