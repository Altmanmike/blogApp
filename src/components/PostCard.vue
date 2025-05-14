<template>
    <article>
        <header>
            <div role="group">
                <h2>Post n°{{ post.id }}: {{ post.title }}<small>, by user {{ post.userId }}</small></h2>
            </div>
        </header>
        {{ post.body }}
        <footer>
            <div role="group">
                <button class="primary">Tags: {{ post.tags }}</button>
                <button class="secondary">Likes: {{ post.reactions.likes }} / Dislikes: {{ post.reactions.dislikes
                }}</button>
                <button class="outline">{{ post.views }} views</button>
            </div>
        </footer>
    </article>
</template>

<script setup>
const props = defineProps({
    post: Object,
    require: true
})
</script>

<style scoped></style>
