import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { 
  }

  getPosts(){
    return this.http.get(this.url+'/posts');
  }

  updatePost(post:any){
    return this.http.patch(this.url+'/posts/'+post.id,JSON.stringify({isRead:true}));
  }

  createPost(post:any){
    return this.http.post(this.url+'/posts/', JSON.stringify(post));
  }

  deletePost(post:any){
    return this.http.delete(this.url+'/posts/'+post.id);
  }
}
