<script setup>
import { ref } from 'vue'

const email = ref('')
const username = ref('')
const password = ref('')

function register() {
    alert('Not implemented yet')
}
</script>

<template>
    <div class="login-container">
        <h2>Register</h2>
        <form class="login-form">
            <input type="email" v-model="email" name="email" placeholder="DLSU Email" />
            <input type="text" v-model="username" name="username" placeholder="Username" />
            <input type="password" v-model="password" name="password" placeholder="Password" />
            <button type="submit" @click.prevent="register">Register</button>
            <small><a href="/login">Login</a></small>
        </form>
    </div>
</template>
