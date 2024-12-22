import { Component, OnInit } from "@angular/core";
import { Ipost } from "src/models/posts";
import { postsArray } from "src/shared/const/posts";


@Component({
    selector : "app-posts",
    templateUrl : "./posts.component.html",
    styleUrls : ["./posts.component.scss"],
})


export class PostsComponent implements OnInit{
   
   postsInfo : Array<Ipost> = postsArray
    constructor() {

    }

    ngOnInit(): void {
        
    }
}