import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


import { TooltipComponent } from '@angular/material';

@Injectable()
export class HomeService {

  constructor(private http : HttpClient) {}

  getfeeds()  {
    
     return this.http.get('https://cors-anywhere.herokuapp.com/https://healthfinder.gov/FreeContent/developer/Search.json?api_key=lzdzpvovdsxvkowb&keyword=*')
      .subscribe((data : any) => {
            return data;
      },(error)=>{
          console.log(error);
      }
      );
  }}