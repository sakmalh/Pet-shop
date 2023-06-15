<template>
    <div class="">
      <div v-if="products">
        <ItemCard :items="products" />
      </div>
    </div>
</template>

<script>
import productsData from '@/assets/data.json';
import ItemCard from '@/components/ItemCard.vue';

export default {
    name: 'Items',
    components: { ItemCard },
    setup() {
        const products = productsData.products
        return { products }
    }
}
</script>