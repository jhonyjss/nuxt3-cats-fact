<!--
    Componente de galeria.
    Este componente exibe uma galeria de imagens.
    Recebe Props: Images <Array>
  -->
<template>
    <div id="DesktopGallery" class="desktop-gallery">
          <div class="desktop-gallery-main">
            <figure class="desktop-gallery-figure">
              <img :src="images[0]" alt="A cat" class="gallery-image" />
            </figure>
          </div>
          <div class="desktop-gallery-side">
            <figure>
              <img
                :src="images[1]"
                alt="A cat"
                class="gallery-image"
              />
            </figure>
            <figure>
              <img
                :src="images[2]"
                alt="A cat"
                class="gallery-image sm:!h-60 2xl:!min-h-[300px]"
              />
            </figure>
          </div>
        </div>

    <div id="MobileGallery" class="mobile-gallery">
        <carousel :items-to-show="2.3">
          <slide v-for="(image, index) in images" :key="index">
            <figure>
              <img
                :src="image"
                alt="A cat"
                class="gallery-image"
              />
            </figure>
          </slide>
        </carousel>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true
  }
})
const emit = defineEmits(['invalid-extension'])

onMounted(() => {
  const validImageExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
  props.images.forEach((image) => {
    const extension = image.split('.').pop();
    if (extension && !validImageExtensions.includes(extension)) {
      console.error(`Invalid image extension: ${extension}`);
    }
  });
});
</script>

<style lang="postcss" scoped>
.desktop-gallery {
  @apply hidden flex-col md:flex-row gap-8 md:flex;
}

.desktop-gallery-main {
  @apply w-full md:w-[70%];
}

.desktop-gallery-figure {
  @apply mt-6 md:mt-10;
}

.desktop-gallery-side {
  @apply flex flex-col w-full md:w-[30%] gap-2 md:gap-y-5 mt-6 md:mt-10;
}

.mobile-gallery {
  @apply md:hidden;
}

.gallery-image {
  @apply w-full object-cover h-48 md:h-auto rounded-2xl;
}
</style>