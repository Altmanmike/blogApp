<template>
    <article :product="product" class="flex">
        <header>
            {{ product.title }} / product N°{{ product.id }}
        </header>
        <img :src="product.images" alt="" />
        <div role="group">
            <button class="primary btncustom">price: {{ product.price }}</button>
            <button class="secondary btncustom">stock: {{ product.stock }}</button>
            <button class="outline btncustom">category: {{ product.category }}</button>
        </div>
        <footer>
            <div role="group">
                <button class="primary">VIEW</button>
                <button class="secondary">EDIT</button>
                <button class="contrast">DELETE</button>
            </div>
        </footer>
    </article>
</template>

<script setup>
const props = defineProps({
    product: Object,
    require: true
})
</script>

<style scoped>
article {
    text-align: center;
}

img {
    max-width: 500px;
}

.btncustom {
    padding: 0 1rem;
    margin: 0 1rem;
}
</style>