import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  posts: any
  post = null
  newPost = {
    name: "",
    description: "",
    image: ""
  }
  newComment = {
    commenter_name: "",
    comment: "",
    rating: 0
  }

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.allPosts()
  }

  create(){
    let observable = this._httpService.newPost(this.newPost)
    observable.subscribe(data => {
      console.log("data", data)
      this.allPosts()
    })
    this.newPost.name = ""
    this.newPost.description = ""
    this.newPost.image = ""
  }

  allPosts(){
    let observable = this._httpService.getPosts()

    observable.subscribe(data => {
      this.posts = data["posts"]
    })
  }

  comment(id){
    let observable = this._httpService.newComment({id: id, comment: this.newComment})
    observable.subscribe(data => {
      this.allPosts()
    })
    this.newComment.commenter_name = ""
    this.newComment.comment = ""
    this.newComment.rating = 0
  }

  commentFromChild(data){
    this.newComment.commenter_name = data.comment.commenter_name
    this.newComment.comment = data.comment.comment
    this.newComment.rating = data.comment.rating
    this.comment(data.id)
    this.showDetails(data.id)
  }

  showDetails(id){
    let observable = this._httpService.getById(id)

    observable.subscribe(data => {
      this.post = data["post"]
    })
  }

  close(data){
    this.post = null
  }

  search(data){
    //console.log(data.target.value)
    if(data.target.value.length > 0){
      let observable = this._httpService.getByPoster(data.target.value)
      observable.subscribe(data => {
        //console.log(data)
        this.posts = data["posts"]
      })
    } else {
      this.allPosts()
    }
  }
}
