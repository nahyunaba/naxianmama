<template>
  <v-list>
    <v-card>
      <v-row>
        <v-col v-for="o in order" :key="o">
          {{ o.date }}-{{ o.receiver }}
        </v-col>
      </v-row>
    </v-card>
  </v-list>
</template>

<script>
export default {
  data: () => {
    return {
      order: {
        order_1: {
          date: "22-9-1",
          receiver: "收货人",
          address: "地址",
          product: "产品",
          product_number: "12324",
          status: "已付款",
          other: "换",
        },
        order_2: {
          date: "22-9-2",
          receiver: "收货人",
          address: "地址",
          product: "产品",
          product_number: "12324",
          status: "已付款",
          other: "换",
        },
        order_3: {
          date: "22-9-3",
          receiver: "收货人",
          address: "地址",
          product: "产品",
          product_number: "12324",
          status: "已付款",
          other: "换",
        },
      },
    };
  },
};
</script>
