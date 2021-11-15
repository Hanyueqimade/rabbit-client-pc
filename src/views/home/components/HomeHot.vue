<template>
  <HomePanel title="人气推荐" subTitle="人气爆款，不容错过">
    <template v-slot:default>
      <ul class="goods-list">
        <li v-for="item in hotGoodsData" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" :alt="item.title" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>
<script>
import HomePanel from "@/views/home/components/HomePanel";
import { ref } from "vue";
import { getHotGoods } from "@/api/home";
export default {
  name: "HomeHot",
  components: { HomePanel },
  setup() {
    const { getData, hotGoodsData } = freshGoods();
    return { getData, hotGoodsData };
  },
};
function freshGoods() {
  const hotGoodsData = ref();
  const getData = getHotGoods().then((data) => {
    hotGoodsData.value = data.result;
  });
  return { getData, hotGoodsData };
}
</script>
<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .desc {
      font-size: 18px;
      color: #999999;
    }
  }
}
</style>
