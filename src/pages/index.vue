<template>  
  <div class="main-content">
    <section class="main-section">
      <div class="main-section-left">
        <section class="fact-section">
          <h2 class="fact-title">CAT FACT:</h2>
          <img v-if="isLoading" class="w-60 bg-orange-300 rounded-full p-2" src="/images/cat-loading.gif" alt="">
          <Transition mode="out-in">
            <p
              v-if="catData.data"
              class="fact-text"
              :key="catData.data.substring(0, 5)"
            >
              {{ catData.data }}
            </p>
          </Transition>
          <button class="btn-random relative" @click="randomCat">
            <MdiIcon icon="mdiRefresh" class="mx-2 text-2xl absolute left-0" />
           <span class="ml-6">GET A RANDOM CAT FACT</span>
          </button>
        </section>
      </div>

      <div class="main-section-right">
        <Gallery :images="['/images/kitty1.webp', '/images/kitty2.webp', '/images/kitty3.webp']" />
      </div>
    </section>
  </div>
  <!-- End Main Content -->
</template>

<script setup lang="ts">
import { useCatStore } from "@/stores/catStore";
import Gallery from "~/components/Gallery.vue";
import { ref, onMounted, reactive } from 'vue';
import { useHead } from '@unhead/vue';

interface CatData {
  data: string | null;
}

const catData: CatData = reactive({ data: null });
const store = useCatStore();
const isLoading = ref(true);

useHead({
  titleTemplate: "default",
  title: "Home",
  meta: [
    {
      name: "description",
      content: "The Defsaf Cat Facts Page"
    }
  ]
});

onMounted(async () => {
  await store.fetchCats();
  isLoading.value = false;
  catData.data = store.cats[0];
});

const randomCat = () => {
  const randomIndex = Math.floor(Math.random() * store.cats.length);
  catData.data = store.cats[randomIndex];
};
</script>

<style lang="postcss" scoped>

  .main-content {
    @apply container mx-auto px-4;
  }

  .main-section {
    @apply flex flex-col md:flex-row justify-center items-center mt-8 gap-8;
  }

  .main-section-left {
    @apply w-full md:w-[35%];
  }

  .fact-section {
    @apply flex flex-col p-6 md:p-12 gap-6 md:gap-10;
  }

  .fact-title {
    @apply text-midnight-fur text-2xl md:text-3xl font-bold;
  }

  .fact-text {
    @apply text-twilight-paw text-lg md:text-2xl font-jost;
  }

  .main-section-right {
    @apply w-full md:w-[55%];
  }

  .btn-random {
  @apply block justify-center items-center md:max-w-[17rem] text-base bg-twilight-paw text-cream-tail font-bold p-2 rounded-md mt-4 shadow-btn cursor-pointer flex-shrink-0 transition-all;
  &:hover {
    @apply bg-midnight-fur;
  }
}

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>