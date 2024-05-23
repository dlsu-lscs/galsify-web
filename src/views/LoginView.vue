<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

function login() {
    alert('Not implemented yet')
}
</script>

<template>
    <div class="login-container">
        <h2>Login</h2>
        <form class="login-form">
            <input type="text" v-model="username" name="username" placeholder="Username" />
            <input type="password" v-model="password" name="password" placeholder="Password" />
            <button type="submit" @click.prevent="login">Login</button>
        </form>
    </div>
</template>
