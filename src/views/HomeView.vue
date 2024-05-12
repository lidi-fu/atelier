<template>
  <div class="home">
    <div class="statement">
      <div><span></span></div>
    </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.statement {
  align-content: center;
  width: 50%;
}

.showreel {
  padding-top: 50px;
}

span {
  font-style: italic;
  line-height: 1;
  width: 50%;
}
</style>
