import { Component, OnInit ,Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { routerTransition } from '../../router.animations';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.scss'],
  animations: [routerTransition()]
})
export class ChefListComponent implements OnInit {
verifiactionForm:FormGroup
datamodel
userListchef
  constructor(private fb: FormBuilder,private adminService:AdminService,private toastr: ToastrService,public dialog: MatDialog) {

  this.datamodel={}
    this.verifiactionForm = fb.group({
                'categoryName': [null, Validators.compose([Validators.required,Validators.maxLength(100)])],
            
            
        })  }

  ngOnInit() {
  	this.onGetList()
  }
  onGetList(){
    this.adminService.usersChefAdmin()
        .subscribe(data=>{
            if(data.response){;
              this.userListchef=data.data
             this.toastr.success(data.message ,'Success',{timeOut: 1000, closeButton: true});
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
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});     
            }
        })
  }

  onSubmit(){
    let datamodelvalue=Object.assign({}, this.datamodel)
  	if (datamodelvalue.id) {
  		this.adminService.editCategory(Object.assign({}, datamodelvalue))
        .subscribe(data=>{
            if(data.response){;
              //this.userListchef=data.data
             this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
            }
        })
  	}else{
  		this.adminService.AddCategory(datamodelvalue)
        .subscribe(data=>{
            if(data.response){;
            	data.data.status=1
             this.userListchef.push(data.data)
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
  	this.adminService.editCategory( catt)
        .subscribe(data=>{
            if(data.response){;
              //this.userListchef=data.data
             this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
            }
        })
  }

  onedit(cat){
  	console.log(cat)
  	 //this.datamodel=Object.assign({}, country)
 this.datamodel=cat
  }

  onReset(){
  	this.datamodel={}
  }

  opendelete(data): void {
        let dialogRef = this.dialog.open(ChefListConfirmation, {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(result => {
         if (result) {
           this.onDelete(data)
         }
        });
    }
onDelete(datareq){
  //alert('hy')
		this.adminService.deleteUser(datareq)
        .subscribe(data=>{
            if(data.response){;
              this.userListchef=this.userListchef.filter(item=>item.id!=datareq.id)
             this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
            }
        })
}

}


@Component({
  selector: 'category-confirmation-dialog',
  templateUrl: 'confirmation.html',
  animations: [routerTransition()]
})

export class ChefListConfirmation {
   

  constructor(
    public dialogRef: MatDialogRef<ChefListConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data: any,
        private adminService: AdminService,
        public dialog: MatDialog) {
       }

  onYesClick(): void {
    this.dialogRef.close('yes');
    // this.homePage.onDelete(this.data.admin)
  }
   onNoClick(): void {
    this.dialogRef.close();
  }

}