<template>
  <div class="home">
    <!-- <div class="statement">
      <div><span>My artistic endeavors are an intricate journey delving into spirituality through both visual and conceptual dimensions. Motivated by my profound intrigue with the interplay of shapes, forms, colors, and compositions. Navigating the realm between conventional academic roots and the avant-garde realm of new media art, I continuously seek to unearth the potential and tension inherent in both worlds.</span></div>
    </div> -->
    <div class="showreel">
      <PictureViewer />
    </div>
  </div>
</template>

<script>
import PictureViewer from '@/components/PictureViewer.vue';

export default {
  name: 'Homepage',
  components: {
    PictureViewer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  /* position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: calc(100%vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around; */
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}
.statement {
  width: 80%;
  align-content: center;
}
.showreel {
  padding-top: 50px;
}
</style>
