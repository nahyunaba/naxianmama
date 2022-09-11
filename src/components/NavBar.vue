<template>
  <nav>
    <v-toolbar app flat>
      <v-toolbar-title class="text-uppercase grey--text">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <span class="font-weight-light">Todo</span>
        <span>NAXIAN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <span flat color="grey">Sign Out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card class="mx-auto" height="800" width="256">
      <v-navigation-drawer
        class="deep-purple accent-4"
        dark
        permanent
        v-model="drawer"
      >
        <v-list>
          <v-list-item v-for="link in links" :key="link.name" :to="link.to">
            <v-list-item-icon>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="">
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      drawer: true,
      links: [
        {icon: "mdi-book", text: "dashboard", to: "/"},
        {icon: "mdi-folder", text: "My projects", to: "/projects"},
        {icon: "mdi-account", text: "Team", to: "/team"},
      ],
    };
  },
};
</script>
