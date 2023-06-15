<template>
    <div class="min-h-screen">
      <router-link :to="{ name: 'CreateAdoption'}" class="mx-20 flex m-auto text-2xl mt-10 text-white bg-orange-300 border-0 py-2 px-20 focus:outline-none hover:bg-orange-500 rounded">
        Enlist to Adopt
      </router-link>
      <div v-if="error" class="text-center text-lg pt-2 pb-5 text-red-600">Could not fetch data</div>
      <div v-if="adoptions">
        <ProductCard :adoptions="adoptions" />
      </div>
    </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import getUser from '@/composables/getUser';
import ProductCard from '@/components/ProductCard.vue';

export default {
    name: 'UserAdoptions',
    components: { ProductCard },
    setup() {
        const { user } = getUser() 
        const { error, documents: adoptions } = getCollection(
        'adoptions',
        ['userId', '==', user.value.uid])

        return { error, adoptions }
    }
}
</script>

<style lang="scss" scoped>

</style>