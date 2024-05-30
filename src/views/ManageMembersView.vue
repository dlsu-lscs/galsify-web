<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
    <div class="window-container">
        <v-layout>
            <NavigationBar />

            <v-main>
                <v-container>
                    <v-card>
                        <v-card-title>Username</v-card-title>
                        <v-card-subtitle>user_email@dlsu.edu.ph</v-card-subtitle>

                        <v-card-text> Current Role: Admin </v-card-text>
                        <v-card-actions>
                            <v-btn variant="outlined">Edit Role</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-main>
        </v-layout>
    </div>
</template>

<style scoped>
.window-container {
    font-family: 'JetBrains Mono', monospace;
}

.event-title {
    font-weight: bold;
    font-size: 2rem;
}

.v-btn {
    text-transform: none;
}

.v-navigation-drawer {
    padding-top: 10px;
}

.event-list-add {
    margin-left: auto;
    margin-right: auto;
}
</style>
