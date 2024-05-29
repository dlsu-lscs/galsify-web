<script setup>
import { ref } from 'vue'

const showPassword = ref(false)

const username = ref('')
const password = ref('')

function login() {
    window.location.href = '/dashboard'
}
</script>

<template>
    <div class="window-container">
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
