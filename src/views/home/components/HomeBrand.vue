<template>
  <HomePanel title="热门品牌" subTitle="国际经典 品质保证" ref="target">
    <template v-slot:right>
      <a
        href="javascript:"
        class="iconfont icon-angle-left prev"
        @click="toggle(-1)"
        :class="{ disabled: currentIndex === 0 }"
      ></a>
      <a
        href="javascript:"
        class="iconfont icon-angle-right next"
        @click="toggle(1)"
        :class="{ disabled: currentIndex === 1 }"
      ></a>
    </template>
    <template v-slot:default>
      <div class="box">
        <ul
          class="list"
          :style="{ transform: `translateX(${-currentIndex * 1240}px)` }"
        >
          <li v-for="item in hotBrandData" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" :alt="item.name" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>
  </HomePanel>
</template>

<script>
import HomePanel from "@/views/home/components/HomePanel";
import useLazyData from "@/hooks/useLazyData";
import { getHotBrand } from "@/api/home";
import { ref } from "vue";
export default {
  name: "HomeBrand",
  components: { HomePanel },
  setup() {
    const { target, result } = useLazyData(getHotBrand);
    return { target, hotBrandData: result, ...useToggle() };
  },
};
function useToggle() {
  const currentIndex = ref(0);
  const toggle = (step) => {
    const nextIndex = currentIndex.value + step;
    if (nextIndex < 0 || nextIndex > 1) return;
    currentIndex.value = nextIndex;
  };
  return { currentIndex, toggle };
}
</script>

<style scoped lang="less">
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
