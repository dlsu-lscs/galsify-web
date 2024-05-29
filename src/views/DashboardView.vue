<script setup>
import TopNavigationBar from '@/components/TopNavigationBar.vue'
import EventNavigationDrawer from '@/components/EventNavigationDrawer.vue'
</script>

<template>
    <v-layout>
        <TopNavigationBar />
        <EventNavigationDrawer />

        <v-main>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card variant="plain">
                            <template v-slot:title> Event Title </template>
                            <v-card-text>
                                Event Description Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque
                                cupiditate minima, at placeat totam, magni doloremque veniam neque
                                porro libero rerum unde voluptatem!
                            </v-card-text>

                            <v-divider></v-divider>
                            <v-list>
                                <v-list-item> 3 Pre-Registered </v-list-item>
                                <v-list-item> 3 filled up GALS </v-list-item>
                            </v-list>
                            <v-card-actions>
                                <v-btn>Upload Pre-registration Form</v-btn>
                                <v-btn>Export GALS Sheet</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col> alskjladjslkj </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>
