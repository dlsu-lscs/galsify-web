<script setup></script>

<template>
    <div class="window-container">
        <v-navigation-drawer permanent="">
            <v-list-item>
                <v-text-field prepend-icon="mdi-magnify" label="Search Events"> </v-text-field>
            </v-list-item>

            <v-list-item link to="/dashboard" title="Event Name 1"></v-list-item>
            <v-list-item link title="Event Name 2"></v-list-item>
            <v-list-item link title="Event Name 3"></v-list-item>
        </v-navigation-drawer>
    </div>
</template>

<style scoped>
.v-navigation-drawer {
    padding-top: 10px;
}

.v-list-item {
    font-family: 'JetBrains Mono', monospace;
}
</style>
