<template>
    <h1>POSTS fetch from api https://dummyjson.com/docs/posts : </h1>

    <PostCard v-for="post in posts" :key="post.id" :post="post">
    </PostCard>

</template>

<script setup>
import fetchUtils from '@/utils/fetchUtils';
import { ref, onMounted } from 'vue';
import PostCard from '@/components/PostCard.vue'

const posts = ref([])

onMounted(() => {

    fetchUtils('posts').then(data => {
        posts.value = data.posts        
    })
})

</script>

<style scoped></style>