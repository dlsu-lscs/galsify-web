<script setup>
import { ref } from 'vue'

const showPassword = ref(false)

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
            <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                name="password"
                placeholder="Password"
            />
            <div class="login-show-password">
                <label for="login-show-password">
                    <input
                        type="checkbox"
                        v-model="showPassword"
                        name="showPassword"
                        id="login-show-password"
                    />Show Password
                </label>
            </div>
            <button type="submit" @click.prevent="login">Login</button>

            <a href="/register">Create Account</a>
        </form>
    </div>
</template>
