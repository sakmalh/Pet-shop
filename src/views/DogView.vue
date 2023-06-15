<template>
<div>
    <button v-on:click="fetchImageUrls" class="flex m-auto text-2xl mt-10 text-white bg-orange-300 border-0 py-2 px-20 focus:outline-none hover:bg-orange-500 rounded">
        Reload
    </button>
</div>
  <div v-if="imageUrls" class="container mx-auto">
    <div class="lg:columns-4 sm:columns-2 lg:m-10 sm:mt-5">
      <div v-for="imageUrl in imageUrls" :key="imageUrl" class="aspect-w-1 aspect-h-1 m-4">
        <img
          class="w-full rounded-lg"
          :src="imageUrl"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <h1 class="text-lg text-red-500">Could not fetch data now. Try again another time</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const imageUrls = ref([]);
    
    const fetchImageUrls = () => {
      fetch('https://dog.ceo/api/breeds/image/random/50')
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'success') {
            imageUrls.value = data.message;
          }
        })
        .catch((error) => {
          console.error('Error fetching image URLs:', error);
        });
    };

    onMounted(() => {
      fetchImageUrls();
    });

    return {
      imageUrls,
      fetchImageUrls
    };
  },
};
</script>
