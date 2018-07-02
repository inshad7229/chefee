import { Component, OnInit ,Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { routerTransition } from '../../router.animations';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { forkJoin } from "rxjs"
@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss'],
  animations: [routerTransition()]
})
export class SpecialityComponent implements OnInit {

  verifiactionForm:FormGroup
datamodel
categoryList
specialityList
activeindex
activecatname
selectedCateory
subcategoryList
  constructor(private fb: FormBuilder,private adminService:AdminService,private toastr: ToastrService,public dialog: MatDialog) {

  this.datamodel={}
    this.verifiactionForm = fb.group({
                'speciality': [null, Validators.compose([Validators.required,Validators.maxLength(100)])],
                'category_id': [null, Validators.compose([Validators.required,Validators.maxLength(100)])],
                'subcategory_id': [null, Validators.compose([Validators.required,Validators.maxLength(100)])],
            
            
        })  }

  ngOnInit() {
    this.onGetList()
  }

  oncategoryChange(id){
     this.subcategoryList=this.categoryList.filter(id=>id==id)
  }
  onGetList(){
    forkJoin([this.adminService.adminCategorieswithSubcategory(), this.adminService.getSpeciality()]).subscribe(results => {
      if(results[0].response || results[1].response){;
              this.categoryList=results[0].data
              this.specialityList=results[1].data
             this.toastr.success(results[0].message ,'Success',{timeOut: 1000, closeButton: true});
            }else{
              this.toastr.error(results[0].message,'Error',{timeOut: 3000, closeButton: true});     
            }
    });
  }

  onSubmit(){
    let datamodelvalue=Object.assign({}, this.datamodel)
    if (datamodelvalue.id) {
      this.adminService.editSpeciality(datamodelvalue)
        .subscribe(data=>{
            if(data.response){;
              this.onGetList()
              this.datamodel={}
              this.activecatname=null
              this.activeindex=null
              this.verifiactionForm.reset()
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
            }
        })
    }else{
      this.adminService.AddSpeciality(datamodelvalue)
        .subscribe(data=>{
            if(data.response){;
               this.onGetList()
               this.datamodel={}
               this.activecatname=null
               this.activeindex=null
               this.verifiactionForm.reset()
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
            }
        })
    }
        
  }
  getClass(i){
    if (i%5==0) {
      return 'active'
    }else if (i%5==1) {
      return 'success'
    }else if (i%5==2) {
      return 'info'
    }else if (i%5==3) {
      return 'warning'
    }else if (i%5==4) {
      return 'danger'
    }

  }

  onChange(cat){
     let catt=Object.assign({}, cat)
    this.adminService.editSubCategory(catt)
        .subscribe(data=>{
            if(data.response){;
              //this.categoryList=data.data
             this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
            }
        })
  }

  onedit(cat,i){
    console.log(cat)
 // this.subcategoryList=this.categoryList.filter(id=>id==cat.category_id)
  this.selectedCateory=this.categoryList.filter(id=>id==cat.category_id)
 this.activecatname=cat.category.name
 this.activeindex=i
 this.datamodel=cat
 this.datamodel.category_id=cat.category_id
 this.datamodel.subcategory_id=cat.subcategory_id
  }
onChangeCat(cat){
  console.log(cat)
   console.log(this.activeindex)
   this.selectedCateory=cat
  if (this.activeindex==0 ||this.activeindex) {
    console.log('in if condition')
      this.specialityList[this.activeindex].category.name=cat.name
    // code...
  }
}

onChangeSubCat(){

}
  onReset(){
     this.datamodel={}
     if (this.activecatname) {
       this.specialityList[this.activeindex].category.name=this.activecatname
       // code...
     }
     this.activecatname=null
     this.activeindex=null
  }

  // opendelete(data): void {
  //       let dialogRef = this.dialog.open(categoryConfirmation, {
  //           width: '400px',
  //       });
  //       dialogRef.afterClosed().subscribe(result => {
  //        if (result) {
  //          this.onDelete(data)
  //        }
  //       });
  //   }
onDelete(datareq){
    this.adminService.deleteCategory(datareq)
        .subscribe(data=>{
            if(data.response){;
              this.specialityList=this.specialityList.filter(item=>item.id!=datareq.id)
             this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
            }
        })
}
}