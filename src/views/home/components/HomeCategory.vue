<template>
  <div class="home-category" @mouseleave="current = null">
    <ul class="menu">
      <li
        @mouseenter="current = ele"
        v-for="ele in list"
        :key="ele.id"
        :class="{ active: current?.id && current.id === ele.id }"
      >
        <RouterLink to="/">{{ ele.name }}</RouterLink>
        <template v-if="ele.children">
          <RouterLink to="/" v-for="child in ele.children" :key="child.id">{{
            child.name
          }}</RouterLink>
        </template>
        <template v-else>
          <XtxSkeleton
            animated="fade"
            width="60px"
            height="18px"
            bg="rgba(255,255,255,0.2)"
            style="margin-right: 5px"
          ></XtxSkeleton>
          <XtxSkeleton
            animated="fade"
            width="60px"
            height="18px"
            bg="rgba(255,255,255,0.2)"
          ></XtxSkeleton>
        </template>
      </li>
    </ul>
    <div class="layer" v-if="current">
      <h4>分类商品推荐 <small>根据您的购买或浏览记录推荐</small></h4>
      <ul v-if="current.goods">
        <li v-for="goods in current.goods" :key="goods.id">
          <RouterLink to="/">
            <img :src="goods.picture" :alt="goods.name" />
            <div class="info">
              <p class="name ellipsis-2">{{ goods.name }}}</p>
              <p class="desc ellipsis">{{ goods.desc }}</p>
              <p class="price"><i>¥</i>{{ goods.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul>
        <li class="brand" v-for="item in current.brands" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" :alt="item.name" />
            <div class="info">
              <p class="place">
                <i class="iconfont icon-dingwei"></i>{{ item.place }}}
              </p>
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="desc ellipsis-2">{{ item.nameEn }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { getHotBrands } from "@/api/home";

export default {
  name: "HomeCategory",
  setup() {
    const store = useStore();
    const brand = ref({
      name: "品牌",
      id: "brand",
      children: [
        {
          name: "品牌列表",
          id: "brand-child",
        },
      ],
      brands: [],
    });

    getHotBrands().then((data) => {
      brand.value.brands = data.result;
    });

    const list = computed(() => {
      const result = store.state.category.list.map((ele) => ({
        ...ele,
        children: ele.children ? ele.children.slice(0, 2) : null,
      }));
      result.push(brand.value);
      return result;
    });
    const current = ref(null);
    return { list, current };
  },
};
</script>
<style lang="less" scoped>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover {
        background-color: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li.brand {
        height: 180px;
        a {
          align-items: flex-start;
          img {
            width: 120px;
            height: 160px;
          }
          .info {
            p {
              margin-top: 8px;
            }
            .place {
              color: #999;
            }
          }
        }
      }
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
            width: 95px;
            height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
.menu {
  li {
    &:hover,
    &.active {
      background-color: @xtxColor;
    }
  }
}
</style>
