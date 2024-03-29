import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  category = {
    categoryTitle: '',
    categoryDescription: '',
  };
  constructor(
    private _category: CategoryService,
    private _snack: MatSnackBar,
    private _router: Router
  ) {}
  ngOnInit(): void {}

  formSubmit() {
    if (
      this.category.categoryTitle.trim() == '' ||
      this.category.categoryTitle == null
    ) {
      this._snack.open('Title Required !!', '', {
        duration: 3000,
      });
      return;
    }
    //all done
    this._category.addCategory(this.category).subscribe(
      (data) => {
        this.category.categoryTitle = '';
        this.category.categoryDescription = '';
        Swal.fire(
          'Success !!',
          'Category is added successfully',
          'success'
        ).then((result) => {
          this._router.navigate(['admin/categories']);
        });
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Server Error !!', 'error');
      }
    );
  }
}
