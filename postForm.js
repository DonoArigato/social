"use strict";

const postForm ={
 bindings:{
    onSubmit: "&",
    post: "<"
},
template:`
   <form ng-submit="$ctrl.onSubmit($ctrl.newPost)">
       <h2>Title</h2>
       <input type="text" placeholder="Post Title" ng-model="$ctrl.newPost.title"/>
       <h3> Thought </h3>
       <input type="text" ng-model="$ctrl.newPost.thought"/>
    <button id="button"> Add Post</button>
   </form>
   
   `,
   controller: function () {
       const vm = this;
       vm.newPost = {};
   }
 }   
 angular
 .module("babyTwitter")
 .component("postForm", postForm);