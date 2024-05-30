<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
    <div class="window-container">
        <v-layout>
            <NavigationBar />

            <!-- Navigation Drawer (Left of screen) -->
            <v-navigation-drawer permanent="">
                <v-list-item>
                    <v-text-field prepend-icon="mdi-magnify" label="Search Events"> </v-text-field>
                </v-list-item>

                <v-list-item link v-for="i in 3" :key="i" :title="'Event Name ' + i"></v-list-item>

                <template v-slot:append>
                    <v-container>
                        <v-btn class="event-list-add" variant="outlined">Add New Event</v-btn>
                    </v-container>
                </template>
            </v-navigation-drawer>

            <v-main>
                <v-container>
                    <v-row>
                        <v-col cols="7">
                            <v-card>
                                <template v-slot:title>
                                    <span class="event-title">Event Title</span>
                                </template>
                                <v-card-text>
                                    Event Description Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi, ratione debitis quis est labore
                                    voluptatibus! Eaque cupiditate minima, at placeat totam, magni
                                    doloremque veniam neque porro libero rerum unde voluptatem!
                                </v-card-text>

                                <v-divider></v-divider>
                                <v-list>
                                    <v-list-item> 3 Pre-Registered </v-list-item>
                                    <v-list-item> 3 filled up GALS </v-list-item>
                                </v-list>
                                <v-card-actions>
                                    <v-btn variant="outlined">Upload Pre-registration Form</v-btn>
                                    <v-btn variant="outlined">Export GALS Sheet</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="5">
                            <v-card>
                                <v-list density="compact">
                                    <v-list-item>
                                        <h2>Moderators</h2>
                                        <template v-slot:append>
                                            <v-icon icon="mdi-plus"></v-icon>
                                        </template>
                                    </v-list-item>

                                    <v-list-item v-for="i in 3" :key="i">
                                        Account {{ i }}
                                        <template v-slot:append>
                                            <v-icon icon="mdi-trash-can-outline"></v-icon>
                                        </template>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
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
