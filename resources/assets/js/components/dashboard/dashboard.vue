<script>

import {HTTP} from '../../config/common-http.js'


export default{
  template: require('./dashboard.html'),

  data: function(){
    return{
      message_dashboard: "Dashboard",
      posts:[],
      errors:[]

    }
  },
  methods:{
    saludar: function(){
      this.message_dashboard="Hola Abel";
      this.getPosts();
    },
    getPosts: function(){

      var promise=HTTP.get(`/posts`);
      promise.then(response => {
        this.posts = response.data
      })
      promise.catch(error => {
        this.errors.push(error)
      })

    }

  }
}
</script>
