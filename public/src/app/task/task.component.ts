import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() postToShow: any
  @Output() aTaskEventEmitter = new EventEmitter(); 
  @Output() anotherTaskEventEmitter = new EventEmitter()

  constructor() { }

  newComment = {
    commenter_name: "",
    comment: "",
    rating: 0
  }
  avg_rating = 0;

  ngOnInit() {
    this.findAvg()
  }

  close(){
    this.anotherTaskEventEmitter.emit("close");
  }

  findAvg(){
    let sum = 0
    for(let comment of this.postToShow.comments){
      sum += comment.rating
    }
    this.avg_rating = sum / this.postToShow.comments.length
  }

  triggerEvent(){
    this.aTaskEventEmitter.emit({id: this.postToShow._id, comment: this.newComment});
    this.newComment = {
      commenter_name: "",
      comment: "",
      rating: 0
    }
    this.findAvg()
  }
}
