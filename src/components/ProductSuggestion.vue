<template>
    <div class="flex flex-nowrap overflow-x-auto pl-10 pb-10 animate-marquee" v-if="documents">
        <div v-for="adoption in documents" :key="adoption.id" class="md:w-1/4">
            <router-link :to="{ name: 'AdoptionDetails', params: { id: adoption.id }}">
            <div class="flex-shrink-0 w-64 h-60 mr-4 bg-white rounded-lg shadow-lg transform transition duration-1000 hover:scale-105">
                <img :src="adoption.picUrl" class="w-full h-40 object-cover rounded-t-lg">
                <div class="p-5">
                <h2 class="mb-2 text-xl text-gray-800">{{ adoption.title }}</h2>
                </div>
            </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import getCollection from '@/composables/getCollection';


export default {
    props: ['documents'],
    setup(props){
        const { error, documents } = getCollection('adoptions', null, 6)

        return { }
    }   
}
</script>
