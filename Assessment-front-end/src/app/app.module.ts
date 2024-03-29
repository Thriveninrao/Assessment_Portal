import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { from } from 'rxjs';
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { MatTableModule } from '@angular/material/table';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ViewAssessmentsComponent } from './pages/admin/view-assessments/view-assessments.component';
import { AddAssessmentComponent } from './pages/admin/add-assessment/add-assessment.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { AddAdminComponent } from './pages/admin/add-admin/add-admin.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';

import { FileServicesService } from './services/file-services.service';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import { UpdateAssessmentComponent } from './pages/admin/update-assessment/update-assessment.component';
import { ViewAssessmentQuestionsComponent } from './pages/admin/view-assessment-questions/view-assessment-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateSingleQuestionComponent } from './pages/admin/update-single-question/update-single-question.component';
import { AccessRequestComponent } from './pages/admin/access-request/access-request.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AssignTestComponent } from './pages/admin/assign-test/assign-test.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserDetailsComponent } from './pages/admin/user-details/user-details.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { ViewUserAssessmentsComponent } from './pages/user/view-user-assessments/view-user-assessments.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { AdminDetailsComponent } from './pages/admin/admin-details/admin-details.component';
import { UserAssessmentDetailsComponent } from './pages/admin/user-assessment-details/user-assessment-details.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { AssessmentTakeupComponent } from './pages/user/assessment-takeup/assessment-takeup.component';
import { PreinstructionsComponent } from './pages/user/preinstructions/preinstructions.component';
import { StartTestComponent } from './pages/start-test/start-test.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { GroupUsersComponent } from './pages/admin/group-users/group-users.component';
import { GroupAssessmentsComponent } from './pages/admin/group-assessments/group-assessments.component';
import { ViewUserGroupsComponent } from './pages/admin/view-user-groups/view-user-groups.component';
import { ViewAssessmentGroupsComponent } from './pages/admin/view-assessment-groups/view-assessment-groups.component';
import { FeedbackComponent } from './pages/user/feedback/feedback.component';
import { ViewAssessmentAttendedComponent } from './pages/admin/view-assessment-attended/view-assessment-attended.component';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewAssessmentsComponent,
    AddAssessmentComponent,
    AddAdminComponent,
    AddUserComponent,
    UpdateAssessmentComponent,
    ViewAssessmentQuestionsComponent,
    AddQuestionComponent,
    UpdateSingleQuestionComponent,
    AccessRequestComponent,
    AssignTestComponent,
    UserDetailsComponent,
    UserWelcomeComponent,
    ViewUserAssessmentsComponent,
    UserSidebarComponent,
    AdminDetailsComponent,
    ViewAssessmentAttendedComponent,



    UserAssessmentDetailsComponent,
      PasswordResetComponent,
      AssessmentTakeupComponent,
      PreinstructionsComponent,
      StartTestComponent,
      GroupUsersComponent,
      GroupAssessmentsComponent,
      ViewUserGroupsComponent,
      ViewAssessmentGroupsComponent,
      FeedbackComponent,

  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDividerModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTooltipModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    // MatSort,
    // MatPaginator,
  ],
  providers: [authInterceptorProviders, FileServicesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
