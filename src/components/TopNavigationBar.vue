<script setup>
function viewProfile() {
    alert('Profile not implemented yet')
}

function logout() {
    alert('Logout not implemented yet')
}
</script>

<template>
    <div class="window-container">
        <v-layout>
            <v-app-bar dense id="navbar">
                <div class="navbar-title">GALSify</div>

                <v-tabs>
                    <v-tab>Manage Members</v-tab>
                    <v-tab>Manage Events</v-tab>
                </v-tabs>

                <template v-slot:append>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn icon="mdi-account" v-bind="props"></v-btn>
                        </template>

                        <v-list>
                            <v-list-item @click="viewProfile">Profile</v-list-item>
                            <v-list-item @click="logout">Logout</v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-app-bar>
        </v-layout>
    </div>
</template>

<style scoped>
.window-container {
    font-family: 'JetBrains Mono', monospace;
}

.navbar-title {
    padding-left: 20px;
    padding-right: 20px;

    font-size: 20px;
}

.v-tab {
    text-transform: none !important;
}

.v-list-item {
    font-family: 'JetBrains Mono', monospace;
}

.navbar-align-right {
    margin-left: auto;
    margin-right: 20px;
}

.navbar-align-right div {
    display: inline-block;
    margin-left: 20px;
}
</style>
