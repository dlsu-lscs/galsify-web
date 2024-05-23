<script setup>
import { ref } from 'vue'

const showPassword = ref(false)

const email = ref('')
const username = ref('')
const password = ref('')

function register() {
    const msg = validate()

    if (msg) {
        alert(msg)
    } else {
        alert('Validation successful - Registration not yet implemented')
    }
}

function validate() {
    if (!email.value.endsWith('@dlsu.edu.ph')) {
        return 'Email entered is not a valid DLSU email address'
    }
}
</script>

<template>
    <div class="login-container">
        <h2>Register</h2>
        <form class="login-form" @submit.prevent="register">
            <input type="email" v-model="email" name="email" placeholder="DLSU Email" required />
            <input type="text" v-model="username" name="username" placeholder="Username" required />
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
            <button type="submit">Register</button>
            <a href="/login">Go to Login</a>
        </form>
    </div>
</template>
