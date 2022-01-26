<template>
  <nav class="navbar has-background-success mb-5 is-transparent">
    <div class="container is-fluid">
      <div class="navbar-brand">
        <span class="navbar-item">
          <img src="@/assets/bowl-of-hygieia-white-48x.png">
        </span>
      </div>
      <div class="navbar-menu">
        <span class="navbar-item has-text-white has-text-weight-bold">
          Authorized drugs in Benin
        </span>
        <span class="navbar-item has-text-white">
          |
        </span>
        <span class="navbar-item has-text-white has-text-weight-bold">
          <router-link to="/">Home</router-link>
        </span>
      </div>
    </div>
  </nav>
</template>

<style>
nav span a {
  color: #fff;
}
</style>
