"use strict";
const post = {
    bindings: {
        post:"<"
    },
    template: `
        <h3> {{$ctrl.post.title}}</h3> 
        <p>{{$ctrl.post.thought}}</p>
    `
};


angular
  .module("babyTwitter")
  .component("post", post);