<template>
  <!-- 筛选区 -->
  <div class="sub-filter" v-if="filters && filterLoading">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a
          v-for="brand in filters.brands"
          :key="brand.id"
          :class="{ active: filters.selectedBrandId === brand.id }"
          @click="
            filters.selectedBrandId = brand.id;
            updateSelectedFilters();
          "
          >{{ brand.name }}</a
        >
      </div>
    </div>
    <div class="item" v-for="item in filters.saleProperties" :key="item.id">
      <div class="head">{{ item.name }}：</div>
      <div class="body">
        <a
          v-for="property in item.properties"
          :key="property.id"
          :class="{ active: item.selectedFilterName === property.name }"
          @click="
            item.selectedFilterName = property.name;
            updateSelectedFilters();
          "
          >{{ property.name }}</a
        >
      </div>
    </div>
  </div>
  <div class="sub-filter" v-else>
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
  </div>
</template>
<script>
import { ref } from "vue";
import { getSubCategoryFilterById } from "@/api/category";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export default {
  name: "SubFilter",
  setup(props, { emit }) {
    const route = useRoute();
    const { getData, filters, updateSelectedFilters, filterLoading } =
      useSubCateGory(emit);
    getData(route.params.id);
    return { filters, updateSelectedFilters, filterLoading };
  },
};
function useSubCateGory(emit) {
  const filters = ref();
  const filterLoading = ref(true);
  const getData = (id) => {
    filterLoading.value = false;
    getSubCategoryFilterById(id).then((data) => {
      data.result.brands.unshift({ id: null, name: "全部" });
      data.result.saleProperties.forEach((item) => {
        item.properties.unshift({ id: null, name: "全部" });
        // 用于存储用户选择的筛选条件
        item.selectedFilterName = "全部";
      });
      // 用于存储用户选择的品牌id
      data.result.selectedBrandId = null;
      filters.value = data.result;
      filterLoading.value = true;
    });
  };
  // 用于存储用户选择的筛选条件
  const selectedFilters = {
    brandId: null,
    attrs: [],
  };
  // 用于更新用户选择的筛选条件
  const updateSelectedFilters = () => {
    selectedFilters.brandId = filters.value.selectedBrandId;
    console.log(filters.value.selectedBrandId);
    selectedFilters.attrs = [];
    filters.value.saleProperties.forEach((item) => {
      if (item.selectedFilterName && item.selectedFilterName !== "全部") {
        selectedFilters.attrs.push({
          groupName: item.name,
          propertyName: item.selectedFilterName,
        });
      }
    });
    // 将用户选择的筛选条件传递到父组件
    emit("onFilterParamsChanged", selectedFilters);
  };
  onBeforeRouteUpdate((to) => {
    getData(to.params.id);
  });
  return { getData, filters, updateSelectedFilters, filterLoading };
}
</script>
<style scoped lang="less">
// 筛选区
.sub-filter {
  background: #fff;
  padding: 25px;
  .item {
    display: flex;
    line-height: 40px;
    .head {
      width: 80px;
      color: #999;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
.xtx-skeleton {
  padding: 10px 0;
}
</style>
