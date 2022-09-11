<template>
  <v-app id="inspire">
    <!--  -->
    <v-app-bar app color="white">
      <v-container class="py-0 fill-height">
        <v-tabs align-with-title>
          <v-tab v-for="link in links" :key="link" text :to="link.to">
            {{ link.title }}
            <v-icon right>{{ link.icon }}</v-icon>
          </v-tab>
          <v-spacer></v-spacer>

          <v-btn icon>
            <span>LogOut</span>
            <v-icon right>mdi-logout</v-icon>
          </v-btn>
        </v-tabs>
      </v-container>
    </v-app-bar>

    <!-- side bar Btn -->
    <v-main class="grey lighten-4">
      <v-container>
        <v-row>
          <!-- <sidebar /> -->
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title> optino_btn{{ n }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title> Refresh </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <!-- router-view -->
          <v-col>
            <v-sheet min-height="80vh">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- <v-footer> abc </v-footer> -->
  </v-app>
</template>

<script>
// import sidebar from "@/components/app/SideBar.vue";
export default {
  // components: {sidebar},

  data: () => ({
    links: [
      {title: "首 页", to: "/", name: "home", icon: "mdi-home"},
      {title: "订单管理", to: "/order", name: "order", icon: "mdi-folder"},
      {title: "库存管理", to: "/stock", name: "stock", icon: "mdi-star"},
      {title: "售后管理", to: "/cs", name: "cs", icon: "mdi-account"},
    ],
  }),
};
</script>
