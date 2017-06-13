<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="token" id="token" value="{{ csrf_token() }}">

</head>
<body>
  <div id="app">


    <router-link :to="'home'" class="navbar-brand">
      HOME
    </router-link>

    <router-link :to="'dashboard'" class="navbar-brand">
      DASHBOARD
    </router-link>


    <router-view></router-view>




  </div>

  <script src="js/app.js">

  </script>

</body>
</html>
