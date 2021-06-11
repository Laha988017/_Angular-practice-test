import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-http-practice',
  templateUrl: './http-practice.component.html',
  styleUrls: ['./http-practice.component.css']
})
export class HttpPracticeComponent implements OnInit {

  posts:any;

  constructor(private service:PostService) { 
    
  }

  createPost(input:HTMLInputElement){
    let post:any = {title:input.value};
    input.value= '';
    this.service.createPost(post)
    .subscribe(
      response=>{
        post['id'] = response;
        this.posts.splice(0,0,post);
      }, 
      error=>{
        alert("An unexpected error occured");
        console.log(error);
      });
  }

  updatePost(post:any){
    this.service.updatePost(post)
    .subscribe(
      response=>{
        console.log(response)
      }, 
      error=>{
        alert("An unexpected error occured");
        console.log(error);
      });
  }

  deletePost(post:any){
    this.service.deletePost(post)
    .subscribe(
      response=>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      }, 
      (error: Response)=>{
        if(error.status === 404)
          alert("Post already deleted");
        else{
        alert("An unexpected error occured");
          console.log(error);
        }
      });
  }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(
      response =>{
        this.posts = response;
      }, 
      error=>{
        alert("An unexpected error occured");
        console.log(error);
      });
  }

}
