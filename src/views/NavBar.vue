<template>
  <div class="home">
    <div class="name">
      <router-link class="nav-element-name" to="/">LIDI FU</router-link>
    </div>
    <div class="nav-bar">
      <nav>
        <router-link class="nav-element-artwork" to="/artworks">Artworks</router-link>
        <router-link class="nav-element-archive" to="/Archive">Archive</router-link>
        <router-link class="nav-element-about" to="/about">About</router-link>
    </nav>
    </div>
    <div class="contact">
      <a href="https://www.instagram.com/lidi_fu" target="_blank" rel="noopener noreferrer">
        <img class='ins-icon' src="@/assets/ins.svg" alt="Instagram" />
      </a>
      <a href="mailto:lidi.fu@icloud.com">
        <img class='mail-icon' src="@/assets/email.svg" alt="Email" />
      </a>
    </div>

  </div>
</template>

<script>


</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left:38px;
  padding-right: 38px;
  padding-top:10px;
  padding-bottom: 10px;
  font-weight: bold;
}

nav a {
  text-decoration: none;
  margin: 15px;
  color:black;
}

nav a:hover {
  color: #0061cf;
}

nav a.router-link-exact-active {
  color: #0061cf;
  text-decoration: underline;
}

.nav-element-name{
  color: black;
  font-size: large;
}

.nav-element-name {
  text-decoration: none;
}
.nav-bar {
  padding: 0px;
  text-decoration: none;
}

img {
  width: 30px;
}

.ins-icon {
  margin-right: 10px;
}

</style>
