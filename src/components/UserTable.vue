<template>
    <tr :user="user">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role }}</td>
    </tr>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    user: Object,
    require: true
})

</script>

<style scoped></style>