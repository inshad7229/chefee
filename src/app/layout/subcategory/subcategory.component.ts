import { Component, OnInit ,Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { routerTransition } from '../../router.animations';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { forkJoin } from "rxjs"

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
  animations: [routerTransition()]
})
export class SubcategoryComponent implements OnInit {

  verifiactionForm:FormGroup
datamodel
categoryList
subcategoryList
activeindex
activecatname
selectedCateory
  constructor(private fb: FormBuilder,private adminService:AdminService,private toastr: ToastrService,public dialog: MatDialog) {

  this.datamodel={}
    this.verifiactionForm = fb.group({
                'subcategoryName': [null, Validators.compose([Validators.required,Validators.maxLength(100)])],
                'category_id': [null, Validators.compose([Validators.required,Validators.maxLength(100)])],
            
            
        })  }

  ngOnInit() {
  	this.onGetList()
  }
  onGetList(){
    forkJoin([this.adminService.getCategory(), this.adminService.getSubCategory()]).subscribe(results => {
      if(results[0].response || results[1].response){;
              this.categoryList=results[0].data
              this.subcategoryList=results[1].data
             this.toastr.success(results[0].message ,'Success',{timeOut: 1000, closeButton: true});
             //  //this.sortedData=data.result 
             // if (this.CountyList.length>5){
             //      this.pageSize=5
             //    }else{
             //      this.pageSize=this.CountyList.length  
             //    }
             //    for (var i = this.pageIndex*this.pageSize; i<(this.pageIndex*this.pageSize+this.pageSize); i++) {
             //     this.users.push(this.CountyList[i])
             //     this.sortedData = this.users.slice();

             //    }
            }else{
              this.toastr.error(results[0].message,'Error',{timeOut: 3000, closeButton: true});     
            }
    });
    // //this.adminService.getCategory()
    //     .subscribe(data=>{
    //         if(data.response){;
    //           this.categoryList=data.data
    //          this.toastr.success(data.message ,'Success',{timeOut: 1000, closeButton: true});
    //          //  //this.sortedData=data.result 
    //          // if (this.CountyList.length>5){
    //          //      this.pageSize=5
    //          //    }else{
    //          //      this.pageSize=this.CountyList.length  
    //          //    }
    //          //    for (var i = this.pageIndex*this.pageSize; i<(this.pageIndex*this.pageSize+this.pageSize); i++) {
    //          //     this.users.push(this.CountyList[i])
    //          //     this.sortedData = this.users.slice();

    //          //    }
    //         }else{
    //           this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});     
    //         }
    //     })
  }

  onSubmit(){
    let datamodelvalue=Object.assign({}, this.datamodel)
  	if (datamodelvalue.id) {
  		this.adminService.editSubCategory(datamodelvalue)
        .subscribe(data=>{
            if(data.response){;

             this.activecatname=null
             this.activeindex=null
              //this.categoryList=data.data
             this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
            }
        })
  	}else{
  		this.adminService.AddSubCategory(datamodelvalue)
        .subscribe(data=>{
            if(data.response){;
            	data.data.status=1
              console.log(datamodelvalue.category_id)
             this.subcategoryList.push({id:data.data.id,name:data.data.name,category:{id:this.selectedCateory.id,name:this.selectedCateory.name}})
             this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
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
 this.activecatname=cat.category.name
 this.activeindex=i
 this.datamodel=cat
 this.datamodel.category_id=cat.category.id
  }
onChangeCat(cat){
  console.log(cat)
   console.log(this.activeindex)
   this.selectedCateory=cat
  if (this.activeindex==0 ||this.activeindex) {
    console.log('in if condition')
      this.subcategoryList[this.activeindex].category.name=cat.name
    // code...
  }
}
  onReset(){
  	 this.datamodel={}
     if (this.activecatname) {
       this.subcategoryList[this.activeindex].category.name=this.activecatname
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
              this.subcategoryList=this.subcategoryList.filter(item=>item.id!=datareq.id)
             this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
            }
        })
}
}