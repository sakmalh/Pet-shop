<template>
  <div class="relative">
      <img src="https://prod-assets.production.omega.aapdev.org/img/hero/image/desktop/dog/Hero-DogSearch_DesktopTablet.jpg" />
      <h1 class="absolute sm:text-4xl md:text-4xl lg:text-8xl 2xl:text-8xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Ready to adopt?<br><span class="sm:text-lg md:text-2xl lg:text-xl 2xl:text-xl ">Let's get started. Search pets from shelters, rescues, and individuals</span> </h1>
  </div>

  <div>
    <h1 class="font-semibold text-5xl mt-10 mb-2 text-center">Use our tools</h1>
    <p class="text-center text-lg">Learn how you can use all the tools from Pet Shop and our partners.</p>
  <div class="flex flex-wrap">
    <div v-for="(adoptdeet, index) in adoptdeets" :key="index">
    <div class="w-full lg:max-w-full lg:flex  mt-10 md:ml-2 lg:ml-2">
      <div class="mx-36">
        <img :src="adoptdeet.image" class="w-40">
        <p class="text-center mt-4 text-lg font-semibold">{{ adoptdeet.desc }}</p>
      </div>
    </div>
  </div>
  </div>
  </div>
  
  <div class="">
    <h1 class="font-semibold text-5xl mt-20 mb-2 text-center text-orange-500">Meet Featured Pets</h1>
    <div v-if="error" class="text-center text-lg pt-2 pb-5 text-red-600">Could not fetch data</div>
    <div v-if="adoptions">
      <ProductCard :adoptions="adoptions" />
    </div>
  </div>

  <div class="p-5 bg-green-100">
    <h1 class="font-semibold text-3xl mt-10 mb-8 text-center text-green-700">About the Rescue Center</h1>
    <div class="flex flex-col md:flex-row">
      <div class="md:w-2/3 pb-10 sm:px-5 md:px-10 lg:px-16 2xl:px-20">
        <p class="md:pl-4 2xl:text-2xl sm:text-base md:text-xl">We know pet adoption, because we're adopters too. We think it's just about the best thing you can do. But we'll be real: it can be a lengthy (paperwork-filled) process. <br><br>
                                   So we're making it easier, with the tools, advice, and transparency you need—from the first search through to daily life as a pet parent.<br><br>
                                   Because we'll do whatever it takes to help millions of people and pets find each other.<br><br>
                                   Ready to find your pet? Let's do it.</p>
      </div>
      <div class="md:w-2/3 items-center pb-10">
        <img src="@/assets/Adopt.png" alt="Your Image" class="w-96 m-auto ">
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import getUser from '@/composables/getUser';
import ProductCard from '@/components/ProductCard.vue';

export default {
    name: 'Adoptions',
    components: { ProductCard },
    setup() {
        const { user } = getUser()
        const { error, documents: adoptions } = getCollection('adoptions')
        const adoptdeets = [{
          image: "https://prod-assets.production.omega.aapdev.org/img/Whats_Up_Edit.svg",
          desc: "Get a breakdown"
        }, {
          image: "https://prod-assets.production.omega.aapdev.org/img/Whats_Up_Paw.svg",
          desc: "Set up alerts"
        }, {
          image: "https://prod-assets.production.omega.aapdev.org/img/Whats_Up_Home.svg",
          desc: "Rehome a pet"
        }, {
          image: "https://prod-assets.production.omega.aapdev.org/img/Whats_Up_Vet.svg",
          desc: "Protect your pet"
        }]

        return { error, adoptions, adoptdeets, user }
    }
}
</script>