import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap/modal';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentEnv:string;
  constructor(private ModalService: BsModalService, public service: AppService, public router:Router){
    this.currentEnv = service.getCurrentEnv();
  }

  navigateToStatusUpdate()
  {
    this.router.navigate(['status-update']);
  }

  signoutUser()
  {
    this.service.signout().subscribe((data) => {
      if(data.status == SUCCESS_STATUS_CODE){
        if(data.body == 'signin'){
          this.service.userInfo = new User();
          this.router.Navigate(['']);
        }else{
          window.location.href = this.service.getCurrentWindowOrigin().concat('/').concat(data.body);
        }
      }

      else ModalObject.messageModal("Failure in Signing Out. Please after some time,",
      ModalType.ERROR, Title.ERROR, this.modalService, null).openModal();
    },

    error => {
      console.log("Failer to connect API");
      let Modal = ModalObject.messageModal("AN internal error had occured in signing out. Please try after some time.",
      ModalType.ERROR, Title.ERROR, this.modalService, null);
      modal.openModal();
    });
  }

  NavToHome(){
    this.router.navigate(['home'])
  }
}
