<template>
    <div class="info">
    <div class='left-side'> 
        <div class="profile">
        <img class='profile-pic' src="@/assets/profile.jpg" alt="profile" />
        </div>
        <div class="contacts">
          <p class="name">Lidi Fu</p>
          <p class="medium">Contact</p>
          <div class="contact-content">
          <p class="email">Email</p>
          <a href="mailto:lidi.fu@icloud.com">
            <p>lidi.fu@icloud.com</p>
          </a>
        </div>
        </div>
        <div class="education">
          <p class="medium">Education</p>
          <p class="bold">Royal College of Art</p>
          <p class="light">2023-2024</p>
          <p class="program">MA Information Experience Design</p>
        </div>
        <div class="education">
          <p class="bold">Russian Imperial Academy of Fine Arts</p>
          <p class="light">2019-2021</p>
          <p class="program">MA Monumental Art</p>
          <p class="light">2015-2019</p>
          <p class="program">BA Painting</p>
        </div>
    </div>
    <div class="exhibition-viewer">
      <ExhibitionCom />
    </div>
</div>

</template>

<script>
import ExhibitionCom from '@/components/ExhibitionCom.vue'

export default {
  name: 'about',
  components: {
    ExhibitionCom
  }
}
</script>

<style scoped>

.info {
  padding-top: 30px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 20px;
}

.profile-pic {
  border-radius: 8px;
}
.contacts {
  padding-bottom: 35px;
}
.contact-content {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.profile {
  width: 80%;
}

img {
  width: 100%
}

.name {
  font-weight: 600;
  font-size: x-large;
  padding-bottom: 50px;
}
.medium {
  font-family: Lato;
}

.bold {
  padding-top: 20px;
  font-weight: 600;
  padding-bottom: 10px;
}

p {
  text-align: left;
  line-height: 0;
}

a {
  color: rgb(109, 109, 109);
}

.light {
  color: rgb(161, 161, 161);
  padding-bottom: 10px;
  font-size: small;
}
.left-side {
  width: 40vh;
}

.program {
  padding-bottom: 10px;
}

</style>
