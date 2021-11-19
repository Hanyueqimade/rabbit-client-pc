<template>
  <div class="ref-goods" v-for="item in goodsItem?.children" :key="item.id">
    <div class="head">
      <h3>- {{ item.name }} -</h3>
      <p class="tag">{{ item.saleProperties }}</p>
      <XtxMore />
    </div>
    <div class="body">
      <GoodsItem :goods="goods" v-for="goods in item.goods" :key="goods.id" />
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/views/category/components/GoodsItem";
import { ref } from "vue";
import { getTopCategoryById } from "@/api/category";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
export default {
  name: "CommandGoods",
  components: { GoodsItem },
  setup() {
    const route = useRoute();
    const { goodsItem, getData } = useCategory();
    getData(route.params.id);
    return { goodsItem };
  },
};
function useCategory() {
  const goodsItem = ref();

  const getData = (id) => {
    getTopCategoryById(id).then((data) => {
      goodsItem.value = data.result;
    });
  };
  onBeforeRouteUpdate((to) => {
    getData(to.params.id);
  });

  return { goodsItem, getData };
}
</script>
<style lang="less" scoped>
.ref-goods {
  background-color: #fff;
  margin-top: 20px;
  position: relative;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .head {
    .xtx-more {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .tag {
      text-align: center;
      color: #999;
      font-size: 20px;
      position: relative;
      top: -20px;
    }
  }
  .body {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 65px 30px;
  }
}
</style>
