import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
  animations: [routerTransition()]
})
export class TermsComponent implements OnInit {
 
 categoryList
  constructor(private adminService:AdminService,private toastr: ToastrService,) { 
  	this.categoryList={}
  }
  ngOnInit() {
  	    this.categoryList.type='terms'
  		this.categoryList.text=''
  		this.onGetList()
  }
  onGetList(){
    this.adminService.getHtmlContent(this.categoryList.type)
        .subscribe(data=>{
            if(data.response){;
              this.categoryList=data.result
             this.toastr.success(data.message ,'Success',{timeOut: 1000, closeButton: true});
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});     
            }
        })
  }
  onSubmit(){
  	this.adminService.postHtmlContent(this.categoryList)
        .subscribe(data=>{
            if(data.response){;
              this.categoryList=data.result
             this.toastr.success(data.message ,'Success',{timeOut: 1000, closeButton: true});
            }else{
              this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});     
            }
        })
  }

}