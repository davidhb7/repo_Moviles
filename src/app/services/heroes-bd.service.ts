import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { URL_TODOS_LOS_HEROES } from 'src/config/url.services';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesBDService {

  heroes:Heroe[]=[];


  constructor(
    private httclient: HttpClient
  ) {

  }

  getHeroesApi():any{
    return this.httclient.get(`${URL_TODOS_LOS_HEROES}/heroes`,{}).pipe(
      map((res:any)=>{
        console.log("HOROES: ", res);
        return res;
      })
    )
  }
}
