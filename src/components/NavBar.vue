<template>
  <nav class="nav">
    <div class="brand">
      <logo />
    </div>
    <div class="navigation-list">
      <a class="nav-link active" href="#">home</a>
      <a class="nav-link" href="#">about</a>
      <a class="nav-link" href="#">contact</a>
      <a class="nav-link" href="#">route</a>
      <a class="nav-link" href="#">faq</a>
      <a class="nav-link" href="#">login</a>
    </div>
  </nav>
</template>
<script>
import Logo from './Logo';

export default {
  name: 'Navbar',
  components: {
    logo: Logo,
  }
};
</script>
<style scoped>
.nav {
  width: 90%;
  color: white;
  height: 60px;
  display: flex;
  margin: 0 auto;
  align-items: center;
}

.nav > a {
  color: white;
}

.brand {
  font-weight: 600;
  font-size: 32px;
}

.navigation-list {
  margin-left: auto;
  display: flex;
}

.navigation-list a {
  color: #ffffff !important;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>