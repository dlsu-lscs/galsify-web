<script setup>
    import TopNavigationBar from '@/components/TopNavigationBar.vue'
</script>

<template>
    <div class="window-container">
        <v-layout>
            <TopNavigationBar />

            <v-main>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card>
                                <template v-slot:title>
                                    <span class="event-title">Member</span>
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
                        <v-col>
                            <v-card>
                                <v-list density="compact">
                                    <v-list-item>Moderators</v-list-item>
                                    <v-list-item>
                                        Account 1
                                        <template v-slot:append>
                                            <v-icon icon="mdi-trash-can-outline"></v-icon>
                                        </template>
                                    </v-list-item>
                                    <v-list-item>
                                        Account 2
                                        <template v-slot:append>
                                            <v-icon icon="mdi-trash-can-outline"></v-icon>
                                        </template>
                                    </v-list-item>
                                    <v-list-item>
                                        Account 3
                                        <template v-slot:append>
                                            <v-icon icon="mdi-trash-can-outline"></v-icon>
                                        </template>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-btn variant="outlined">Invite Moderator</v-btn>
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
