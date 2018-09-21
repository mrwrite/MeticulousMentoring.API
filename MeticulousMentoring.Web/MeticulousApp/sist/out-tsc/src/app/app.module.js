"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var common_1 = require("@angular/common");
var http_2 = require("@angular/common/http");
var ngx_pipes_1 = require("ngx-pipes");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var angular_archwizard_1 = require("angular-archwizard");
var ng_multiselect_dropdown_1 = require("ng-multiselect-dropdown");
var ng_select_1 = require("@ng-select/ng-select");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var highcharts_angular_1 = require("highcharts-angular");
var angular2_multiselect_dropdown_1 = require("angular2-multiselect-dropdown/angular2-multiselect-dropdown");
var angular_vertical_timeline_1 = require("angular-vertical-timeline");
var app_component_1 = require("./app.component");
var app_header_component_1 = require("./app-header.component");
var login_component_1 = require("./login/login.component");
var accountservice_1 = require("./shared/accountservice");
var user_service_1 = require("./shared/user.service");
var timeline_service_1 = require("./shared/timeline.service");
var classification_service_1 = require("./classification/classification.service");
var educationSystem_service_1 = require("./educationSystem/educationSystem.service");
var mentee_service_1 = require("./shared/mentee.service");
var mentor_service_1 = require("./mentor/mentor.service");
var guardian_service_1 = require("./guardian/guardian.service");
var school_service_1 = require("./school/school.service");
var director_service_1 = require("./director/director.service");
var grading_service_1 = require("./shared/grading.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var admin_component_1 = require("./admin/admin.component");
var userchart_component_1 = require("./userchart/userchart.component");
var chart_component_1 = require("./chart/chart.component");
var mentee_form_component_1 = require("./forms/mentee.form.component");
var mentee_profile_component_1 = require("./mentee/mentee.profile.component");
var mentor_form_component_1 = require("./forms/mentor.form.component");
var director_form_component_1 = require("./forms/director.form.component");
var round_pipe_1 = require("./shared/round.pipe");
var admin_service_1 = require("./shared/admin.service");
var users_component_1 = require("./dashboard/users/users.component");
var users_service_1 = require("./dashboard/users/users.service");
var home_component_1 = require("./dashboard/home/home.component");
var mentee_profile_service_1 = require("./mentee/mentee.profile.service");
var admin_form_component_1 = require("./forms/admin-form.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var auth_guard_service_1 = require("./shared/auth-guard.service");
var material_1 = require("@angular/material");
var table_1 = require("@angular/cdk/table");
var mentor_profile_component_1 = require("./mentor/mentor.profile.component");
var mentee_dialog_component_1 = require("./mentee-dialog/mentee-dialog.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    {
        path: "dashboard", component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            { path: "", component: home_component_1.HomeComponent, canActivate: [auth_guard_service_1.AuthGuard] },
            { path: "users", component: users_component_1.UsersComponent, canActivate: [auth_guard_service_1.AuthGuard] }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                app_header_component_1.AppHeaderComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                admin_component_1.AdminComponent,
                userchart_component_1.UserchartComponent,
                chart_component_1.MeticulousChartComponent,
                mentee_form_component_1.MenteeFormComponent,
                mentee_profile_component_1.MenteeProfileComponent,
                mentor_form_component_1.MentorFormComponent,
                director_form_component_1.DirectorFormComponent,
                round_pipe_1.RoundPipe,
                mentor_profile_component_1.MentorProfileComponent,
                mentee_dialog_component_1.MenteeDialogComponent,
                users_component_1.UsersComponent,
                home_component_1.HomeComponent,
                admin_form_component_1.AdminFormComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpModule,
                ng2_charts_1.ChartsModule,
                router_1.RouterModule.forRoot(exports.routes, {
                    useHash: true,
                    enableTracing: false
                }),
                forms_1.FormsModule,
                table_1.CdkTableModule,
                forms_1.ReactiveFormsModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                material_1.MatStepperModule,
                table_1.CdkTableModule,
                common_1.CommonModule,
                ngx_pipes_1.NgPipesModule,
                http_2.HttpClientModule,
                ngx_bootstrap_1.BsDatepickerModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                ngx_bootstrap_1.TooltipModule.forRoot(),
                angular_archwizard_1.ArchwizardModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule.forRoot(),
                ng_select_1.NgSelectModule,
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
                angular2_multiselect_dropdown_1.AngularMultiSelectModule,
                ngx_bootstrap_1.TabsModule.forRoot(),
                angular_vertical_timeline_1.VerticalTimelineModule,
                highcharts_angular_1.HighchartsChartModule
            ],
            exports: [mentee_form_component_1.MenteeFormComponent],
            entryComponents: [mentee_form_component_1.MenteeFormComponent, mentor_form_component_1.MentorFormComponent, director_form_component_1.DirectorFormComponent, mentee_dialog_component_1.MenteeDialogComponent, admin_form_component_1.AdminFormComponent],
            providers: [
                accountservice_1.AccountService,
                auth_guard_service_1.AuthGuard,
                user_service_1.UserService,
                classification_service_1.ClassificationService,
                educationSystem_service_1.EducationSystemService,
                mentee_service_1.MenteeService,
                guardian_service_1.GuardianService,
                school_service_1.SchoolService,
                mentor_service_1.MentorService,
                director_service_1.DirectorService,
                timeline_service_1.TimelineService,
                grading_service_1.GradingService,
                admin_service_1.AdminService,
                users_service_1.UsersService,
                mentee_profile_service_1.MenteeProfileService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map