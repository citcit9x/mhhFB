import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
  constructor(private http: Http) { }
  public getListFriend(_id: string, _token: string){
    var url = 'https://graph.facebook.com/v2.10/me/taggable_friends?fields=picture,name&limit=5000&access_token=EAAGwtZBhLDzEBAMk0bmLuU1gf92mZAT8Y8a90UZB6e7vUKEitMuYQZBlqnZBkXTDxM5SLWi1ECbJnIMFj03PEnVnw05IVB6FZB0ddkj2etGL1kHQTf1238hSHDO5PJNQ6vUjr7e5ZBHA2wXsDgZBh61KJVeJlkWklJPqSxZBOYuA2KpycHIrZCWmbdjxuKXteBVsUZD';
    return this.http.get(url).map(res => res.json());
  }
}
