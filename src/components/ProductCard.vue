<template>
    <div class="flex flex-wrap mb-10">
    <div v-for="adoption in adoptions" :key="adoption.id">
      <div class="w-full lg:max-w-full lg:flex  mt-10 md:ml-2 lg:ml-2">
        <router-link :to="{ name: 'AdoptionDetails', params: { id: adoption.id}}" >
          <div class="container my-0">
            <div class="max-w-sm flex flex-wrap">
              <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img class="rounded-t-lg w-full h-64 object-cover" :src="adoption.picUrl" alt="" />
                <div class="py-6 px-8 rounded-lg bg-white">
                  <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{{ adoption.title }}</h1>
                  <p class="text-gray-700 tracking-wide h-12 overflow-hidden">{{ adoption.description }}</p>
                  <button v-if="user" class="mt-6 py-2 px-4 bg-orange-300 hover:bg-orange-500 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Adopt Now</button>
                  <button v-if="!user" class="mt-6 py-2 px-4 bg-orange-300 hover:bg-orange-500 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Login to Adopt</button>

                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    </div>
</template>
  
  
<script>
import getUser from '@/composables/getUser';
export default {
    props: ['adoptions'], 
    setup () {
        const { user } = getUser()

        return { user }
    }
}
</script>
