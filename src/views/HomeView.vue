<template>
  <div class="carousel relative">
    <div class="carousel-inner">
      <img
        :src="`${require('@/assets/images/' + images[currentSlide])}`"
        :alt="images"
        class="object-cover w-full h-full"
      />
    </div>

    <div class="carousel-controls absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
      <button @click="prevSlide" class="carousel-control">
        <svg class="w-8 h-8" viewBox="0 0 20 20">
							<path fill="white" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
				</svg>
      </button>
      <button @click="nextSlide" class="carousel-control">
        <svg class="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
							<path fill="white" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
				</svg>
      </button>
    </div>

  </div>
  <div>
    <h1 class="font-semibold text-2xl mx-10 mt-10 text-center underline decoration-orange-500">New Offers Exclusive For You</h1>
  <div class="flex flex-wrap justify-center">
      <div class="w-72 h-80 p-4 m-2 bg-blue-50 rounded-3xl shadow mx-16 mt-10 transform transition duration-1000 hover:scale-105" v-for="card in cards"
      :style="{ backgroundImage: `url(${require('@/assets/images/' + card.image)})`}">
        <div class="text-center">
          <h1 class="text-3xl text-orange-500 font-bold">{{ card.name }}</h1>
        </div>
        <div class="flex justify-center mt-4">
          <h3 class="text-gray-600 text-2xl font-medium">Under ${{ card.price }}</h3>
        </div>
      </div>
  </div>
  <div class="flex flex-wrap justify-center items-center gap-9 bg-gray-200 p-10 my-20"> 
    <div v-for="(service, index) in services" :key="index" class="rounded-3xl shadow mx-5">
      <img :src="require('@/assets/' + service)" alt="" class="w-full h-full object-cover rounded-3xl">
    </div>
  </div>
  </div>
  <div class="mb-10">
    <h1 class="font-semibold text-3xl mx-10 mt-10 text-center underline decoration-orange-500">Care Membership Program</h1>
  <div class="flex flex-wrap justify-center">
    <div class="w-96 h-72 p-8 rounded-3xl shadow mt-3 mx-5 transform transition duration-1000 hover:scale-105" v-for="image in member">
      <img :src="require('@/assets/images/' + image)" alt="" class="w-full h-full object-cover rounded-3xl">
    </div>
  </div>
  </div>
  <div class="mb-10">
    <h1 class="font-semibold text-3xl mb-10 mt-20 text-center text-orange-700">About the Pet Shop</h1>
    <div class="flex flex-col md:flex-row">
      <div class="md:w-2/3 px-20 pb-10">
        <p class="md:pl-4 2xl:text-2xl sm:text-base md:text-xl">Our online store is part of the award-winning pet shop group which is based in South West England - our network of high street retail pet shops are run by highly trained and dedicated staff who know about pets and understand the needs of pet owners. <br><br>We are members of PIF and have been awarded the top 5-star rating under the new Animal Activities Licensing regulations.</p>
      </div>
      <div class="md:w-2/3 items-center pb-10">
        <img src="@/assets/the-dogs.png" alt="Your Image" class="w-96 m-auto ">
      </div>
    </div>
  </div>

</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const currentSlide = ref(0);
    const images = ref(['large.jpg', 'large2.jpg', 'large3.jpg']);

    const member = ['member.avif', 'member2.avif', 'member23.avif', 'member3.avif']
    const services = ['card1.png', 'card2.png']
    const cards = [
      {
        name: "Dog Toys",
        image: "card1.avif",
        price: "7"
      },
      {
        name: "Dog Treats",
        image: "card2.avif",
        price: "9"
      },
      {
        name: "Beds and Throws",
        image: "card3.avif",
        price: "15"
      },
      {
        name: "Bird Toys",
        image: "card4.avif",
        price: "12"
      }
    ]
    function prevSlide() {
      currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length;
    }

    function nextSlide() {
      currentSlide.value = (currentSlide.value + 1) % images.value.length;
    }

    // Auto change slide every 3 seconds
    let intervalId;
    function startAutoChange() {
      intervalId = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    function stopAutoChange() {
      clearInterval(intervalId);
    }

    onMounted(() => {
      startAutoChange();
    });

    onUnmounted(() => {
      stopAutoChange();
    });

    // Update images list based on screen size
    function updateImages() {
      const screenSize = window.innerWidth;
      if (screenSize <= 640) {
        images.value = ['small.jpg', 'smmall2.jpg', 'small3.jpg'];
      } else if (screenSize <= 768) {
        images.value = ['medium.jpg', 'medium2.jpg', 'medium3.jpg'];
      } else {
        images.value = ['large.jpg', 'large2.jpg', 'large3.jpg'];
      }
    }

    window.addEventListener('resize', updateImages);

    return {
      currentSlide,
      images,
      prevSlide,
      nextSlide,
      cards,
      member,
      services
    };
  },
};
</script>

<style>
/* Remaining styles remain the same */
</style>
