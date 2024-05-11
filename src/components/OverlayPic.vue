<template>
  <div class="overlay" @click="closeOverlay">
    <div class="background"></div>
    <div class="overlay-content">
      <div class="image-container">
        <img :src="selectedImage.largeSrc" :alt="selectedImage.name" class="overlay-image">
      </div>
      <div class="overlay-info">
        <h2>{{ selectedImage.name }}</h2>
        <p>{{ selectedImage.description }}</p>
        <!-- Add more image details here -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedImage: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeOverlay() {
      this.$emit('closeOverlay');
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Adjust opacity as needed */
  backdrop-filter: blur(10px); /* Adjust blur radius as needed */
}

.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  max-height: 100%;
}

.overlay-image {
  height: 80vh;
  object-fit: contain;
}

.overlay-info {
  flex: 1;
  padding: 20px;
  color: white;
}
</style>
