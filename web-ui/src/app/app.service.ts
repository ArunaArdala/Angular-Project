import { Injectable } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn : "root",
})

export class AppService{
    constructor(private http : HttpClient, private modalService : BsModalService){}

    getCurrentEnv()
    {
            return Environment.dev;
    }

    signout()
    {
        let url = this.getbaseUrl().concat("/signout");
        
    }

    private getbaseUrl(){
        // if(window["_app_api_base"] && window["_app_api_base"] != null)
        //     return environment.junction.concat(window["_app_api_base"]) ;
        // else return environment.junction;
        return environment.junction;
    }
}

enum Environment{
    dev = "Development",
}