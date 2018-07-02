import { Component, OnInit ,Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { routerTransition } from '../../router.animations';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss'],
  animations: [routerTransition()]
})
export class DegreeComponent implements OnInit {
verifiactionForm:FormGroup
datamodel
degreeList
  constructor(private fb: FormBuilder,private adminService:AdminService,private toastr: ToastrService,public dialog: MatDialog) {

  this.datamodel={}
    this.verifiactionForm = fb.group({
                'degreeName': [null, Validators.compose([Validators.required,Validators.maxLength(100)])],
            
            
        })  }

  ngOnInit() {
  	this.onGetList()
  }
  onGetList(){
    this.adminService.getDegrees()
        .subscribe(data=>{
            if(data.response){;
              this.degreeList=data.data
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
  		this.adminService.editDegrees(Object.assign({}, datamodelvalue))
        .subscribe(data=>{
            if(data.response){;
              //this.degreeList=data.data
             this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
            }
        })
  	}else{
  		this.adminService.AddDegrees(datamodelvalue)
        .subscribe(data=>{
            if(data.response){;
            	data.data.status=1
             this.degreeList.push(data.data)
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
  	this.adminService.editDegrees( catt)
        .subscribe(data=>{
            if(data.response){;
              //this.degreeList=data.data
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
        let dialogRef = this.dialog.open(DegreeConfirmation, {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(result => {
         if (result) {
           this.onDelete(data)
         }
        });
    }
onDelete(datareq){
		this.adminService.deleteDegrees(datareq)
        .subscribe(data=>{
            if(data.response){;
              this.degreeList=this.degreeList.filter(item=>item.id!=datareq.id)
             this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
            }
        })
}

}


@Component({
  selector: 'Degrees-confirmation-dialog',
  templateUrl: 'confirmation.html',
  animations: [routerTransition()]
})

export class DegreeConfirmation {
   

  constructor(
    public dialogRef: MatDialogRef<DegreeConfirmation>,
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