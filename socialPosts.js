"use strict";

const socialPosts ={
          template:`
    <section>
        <button>New Thought</button>
        <post ng-repeat="post in $ctrl.posts" 
        post="post"></post>
        <post-form on-submit="$ctrl.onSubmit(post)" post="post" ><post-form>
        
    </section>
    `,
    controller: function() {
        const vm = this;
        vm.posts = [ 
        {
            title: "Cana",
            thought: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        
        },{
            title: "James",
            thought: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
        
        },{
            
            title: "Tanya",
            thought: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio"
        }]
        vm.onSubmit = function (post) {
            vm.posts.unshift(post)
            console.log(post)
            console.log(vm.posts)
        }
    }   
}
angular
  .module("babyTwitter")
  .component("socialPosts", socialPosts);