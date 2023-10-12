import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from 'src/app/services/assessment.service';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-assessment',
  templateUrl: './update-assessment.component.html',
  styleUrls: ['./update-assessment.component.scss'],
})
export class UpdateAssessmentComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _assessment: AssessmentService,
    private _category: CategoryService,
    private router: Router,
    private dialogref: MatDialogRef<UpdateAssessmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  categories: any = [];
  category = {
    categoryId: '',
    categoryTitle: '',
    categoryDescription: '',
  };
  assessmentModel = {
    assessmentId: 0,
    assessmentTitle: '',
    ssessmentDescription: '',
    category: {
      categoryId: '',
      categoryTitle: '',
      categoryDescription: '',
    }
  }
  showMaxMarksField: boolean = false;
  assessment: any;
  assessmentId = 0;

  ngOnInit(): void {
    this.assessmentId = this.data.assessmentId;
    // alert(this.assessmentId);
    this._assessment.getAssessment(this.assessmentId).subscribe(
      (data) => {
        this.assessment = data;
        console.log(this.assessment);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Assessment could not be fetched', 'error');
      }
    );
    this._category.categories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Category could not be fetched', 'error');
      }
    );
  }

  // update form submit
  public updateAssessmentData(assessment: any) {
    this.assessmentModel.assessmentId = assessment.assessmentId;
    this.assessmentModel.assessmentTitle = assessment.assessmentTitle;
    this.assessmentModel.ssessmentDescription = assessment.assessmentDescription;
    this.assessmentModel.category = assessment.category;

    this._assessment.updateAssessment(this.assessmentModel).subscribe(
      (data) => {
        Swal.fire('Success', this.assessmentModel.assessmentTitle + ' Assessment Successfully Updated', 'success').then((result) => {
          this.router.navigate(['/admin/view-assessments']);
        });
        // this.assessment = {
        //   assessmentId: null,
        //   assessmentTitle: null,
        //   assessmentDescription: null,
        //   maxMarks: null,
        //   numberOfQuestions: null,
        //   active: null,
        //   category: { categoryId: null },
        //   user: {
        //     id: null
        //   }
        // };
      },
      (error) => {
        console.log(error);
        Swal.fire('error', "Assessment couldn't update");
      }
    );
  }
}
