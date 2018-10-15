import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  newPost(data){
    return this._http.post('/', data)
  }

  getPosts(){
    return this._http.get('/posts');
  }

  newComment(data){
    return this._http.post('/' + data.id, data.comment)
  }

  getById(id){
    return this._http.get("/" + id)
  }

  getByPoster(name){
    return this._http.get("/poster/" + name)
  }
}
