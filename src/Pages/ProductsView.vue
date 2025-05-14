<template>
    <h1>PRODUCTS fetch from api https://dummyjson.com/docs/products : </h1>
    <ProductList v-for="product in products" :key="product.id" :product="product" />
</template>

<script setup>
import ProductList from '@/components/ProductList.vue';
import fetchUtils from '@/utils/fetchUtils';
import { onMounted, ref } from 'vue';

const products = ref([])

onMounted(() => {
    fetchUtils('products').then(data => {
        products.value = data.products
    })
})
console.log(products)
</script>

<style scoped></style>