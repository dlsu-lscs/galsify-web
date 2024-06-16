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
                    <v-text-field prepend-icon="mdi-magnify" label="Search Orgs"> </v-text-field>
                </v-list-item>

                <v-list-item link title="Organization 1"></v-list-item>
                <v-list-item link title="Organization 2"></v-list-item>
                <v-list-item link title="Organization 3"></v-list-item>
            </v-navigation-drawer>

            <v-main>
                <v-container>
                    <v-row>
                        <v-col cols="7">
                            <v-card>
                                <v-card-title class="event-title">Organization Name</v-card-title>

                                <v-card-text>
                                    Organization Description Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi, ratione debitis quis est labore
                                    voluptatibus! Eaque cupiditate minima, at placeat totam, magni
                                    doloremque veniam neque porro libero rerum unde voluptatem!
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn variant="outlined">Edit</v-btn>
                                    <v-btn variant="outlined">View Organization Events</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="5">
                            <v-card>
                                <v-list density="compact">
                                    <v-list-item>
                                        <h2>Members</h2>
                                        <template v-slot:append>
                                            <v-icon icon="mdi-plus"></v-icon>
                                        </template>
                                    </v-list-item>
                                    <v-list-subheader>Administrators</v-list-subheader>
                                    <v-list-item v-for="i in 3" :key="i">
                                        Member {{ i }}
                                        <template v-slot:append>
                                            <v-icon icon="mdi-square-edit-outline"></v-icon>
                                            <v-icon icon="mdi-trash-can-outline"></v-icon>
                                        </template>
                                    </v-list-item>

                                    <v-list-subheader>Event Managers</v-list-subheader>
                                    <v-list-item v-for="i in 3" :key="i">
                                        Member {{ i + 3 }}
                                        <template v-slot:append>
                                            <v-icon icon="mdi-square-edit-outline"></v-icon>
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

.v-icon {
    margin-left: 4px;
}
</style>
