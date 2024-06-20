<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

import router from '@/router'

const showPassword = ref(false)

const email = ref('')
const password = ref('')

async function login() {
    const msg = validate()

    if (msg) {
        alert(msg)
        return
    }

    const res = await axios.post('//127.0.0.1:3000/auth/login', {
        data: {
            email: email.value,
            password: password.value
        }
    })

    console.log(res)

    if (res.data.status == 'success') {
        const token = jwtDecode(res.data.token)
        window.$cookies.set('credentials', token, new Date(token.exp * 1000))

        return router.replace({ name: 'Manage Events' })
    } else {
        alert(res.data.errors.join('\n'))
    }
}

function validate() {
    if (!email.value.endsWith('@dlsu.edu.ph')) {
        return 'Email entered is not a valid DLSU email address'
    }
}
</script>

<template>
    <div class="window-container">
        <div class="login-container">
            <h2>Login</h2>
            <form class="login-form" @submit.prevent="login">
                <input type="text" v-model="email" name="email" placeholder="DLSU Email" required />
                <input
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                    name="password"
                    placeholder="Password"
                    required
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
                <button type="submit">Login</button>

                <a href="/register">Create Account</a>
            </form>
        </div>
    </div>
</template>

<style scoped>
.window-container {
    font-family: 'JetBrains Mono', monospace;
    background-color: var(--darkest-black);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-container {
    background-color: var(--white);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px; /* Adjust width as needed */
    height: auto; /* Adjust height as needed */
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.login-container h2 {
    margin-right: 20px;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: smaller;
}

.login-form input {
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.login-form button {
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    background-color: var(--light-green);
    color: var(--white);
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    .login-container {
        flex-direction: column;
        height: auto;
        width: 80%;
    }

    .login-container h2 {
        margin-right: 0;
        margin-bottom: 20px;
    }

    .login-form input {
        margin-bottom: 10px;
    }
}
</style>
