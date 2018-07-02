import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'category', loadChildren: './category/category.module#CategoryModule' },
            { path: 'subcategory', loadChildren: './subcategory/subcategory.module#SubcategoryModule' },
            { path: 'speciality', loadChildren: './speciality/speciality.module#SpecialityModule' },
            { path: 'cheflist', loadChildren: './chef-list/chef-list.module#ChefListModule' },
            { path: 'degree', loadChildren: './degree/degree.module#DegreeModule' },
            { path: 'userslist', loadChildren: './users-list/users-list.module#UsersListModule' },
            { path: 'userslist/:id', loadChildren: './users-list/users-list.module#UsersListModule' },
            { path: 'userslist', loadChildren: './users-list/users-list.module#UsersListModule' },
            { path: 'aboutus', loadChildren: './about-us/about-us.module#AboutUsModule' },
            { path: 'terms', loadChildren: './terms/terms.module#TermsModule' },
            { path: 'policy', loadChildren: './policy/policy.module#PolicyModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
