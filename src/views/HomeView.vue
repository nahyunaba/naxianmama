<template>
  <div class="homepage">
    <!-- 统计 -->
    <v-list>
      <v-row>
        <v-col>
          <template>
            <v-card class="mx-auto" max-width="700" tile>
              <v-list dense>
                <v-subheader class="mx-auto text-h6">总结</v-subheader>
                <v-divider></v-divider>
                <v-row>
                  <v-col cols="6">
                    <v-divider></v-divider>

                    <v-list-item>
                      <v-list-item-content v-for="i in sample_total" :key="i">
                        <v-list-item-title>总卖出(9月份)</v-list-item-title>

                        <v-list-item-subtitle>
                          {{ i.mouth }} 月份-{{ i.qudao }}: {{ i.price }}元
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider line></v-divider>

                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>其他渠道</v-list-item-title>
                        <v-list-item-subtitle>
                          (淘宝)总卖出: 300元
                        </v-list-item-subtitle>
                        <v-divider line></v-divider>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-list>
            </v-card>
          </template>
        </v-col>
      </v-row>
    </v-list>

    <v-main>
      <HomView />
    </v-main>
  </div>
</template>

<script>
import HomView from "../components/home/HomView";

export default {
  components: {
    HomView,
  },

  data: () => {
    return {
      sample_total: [
        {
          who: "那先麻麻",
          // qudao: {
          //   obtion1: "微信",
          //   obtion2: "小红书",
          //   obtion3: "抖音",
          //   obtion4: "淘宝",
          // },
          qudao: "抖音",
          price: 100,
          mouth: 9,
        },
      ],
    };
  },

  methods: {
    add() {
      console.log("first");
    },
  },
};
</script>
