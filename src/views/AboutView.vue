<template>
<div class="about-view">
    <div class="info">
      <ProfileInfo />
    </div>
    <div class="exhibition-viewer">
      <ExhibitionCom />
    </div>
</div>

</template>

<script>
import ProfileInfo from '@/components/ProfileInfo.vue'
import ExhibitionCom from '@/components/ExhibitionCom.vue'

export default {
  name: 'about',
  components: {
    ExhibitionCom,
    ProfileInfo
  }
}
</script>

<style scoped>
.about-view {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
}


.exhibition-viewer {
  width: 60%;
}

/* Media query for screens smaller than 1200px */
@media screen and (max-width: 1024px) {
    .about-view {
      flex-direction: column;
      align-items: center;
    }

    .info {
      width: 80%;
    }

    .exhibition-viewer {
      width: 85%;
    }
  }
</style>
