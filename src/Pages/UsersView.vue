<template>
    <h1>USERS fetch from api https://dummyjson.com/docs/users : </h1>
    <table>
        <thead data-theme="dark">
            <tr>
                <th scope="col">id</th>
                <th scope="col">firstname</th>
                <th scope="col">lastname </th>
                <th scope="col">age </th>
                <th scope="col">email </th>
                <th scope="col">role </th>
            </tr>
        </thead>
        <tbody>
            <UserTable v-for="user in users" :key="user.id" :user="user" />
        </tbody>
        <tfoot data-theme="dark">
            <tr>
                <th scope="row">end table</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>

</template>

<script setup>
import UserTable from '@/components/UserTable.vue'
import fetchUtils from '@/utils/fetchUtils'
import { onMounted, ref } from 'vue'

const users = ref([])

onMounted(() => {
    fetchUtils('users').then(data => {
        users.value = data.users
    })
})
console.log(users)
</script>

<style scoped></style>