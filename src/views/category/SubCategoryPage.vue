<template>
  <AppLayout>
    <div class="container">
      <XtxBread>
        <XtxBreadItem path="/">首页</XtxBreadItem>
        <XtxBreadItem :path="`/category/${bread.topCategory?.id}`">{{
          bread.topCategory?.name
        }}</XtxBreadItem>
        <Transition name="fade-right" mode="out-in">
          <XtxBreadItem
            :key="bread.subCategory?.id"
            :path="`/category/${bread.subCategory?.id}`"
            >{{ bread.subCategory?.name }}</XtxBreadItem
          >
        </Transition>
      </XtxBread>
      <SubFilter @onFilterParamsChanged="onParamsChanged" />
      <XtxCheckbox v-model="isCheckedValue">仅显示有货商品</XtxCheckbox>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout";
import XtxBread from "@/components/library/XtxBread";
import XtxBreadItem from "@/components/library/XtxBreadItem";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import SubFilter from "@/views/category/components/SubFilter";
import XtxCheckbox from "@/components/library/XtxCheckbox";
export default {
  name: "SubCategoryPage",
  components: { XtxCheckbox, SubFilter, XtxBreadItem, XtxBread, AppLayout },
  setup() {
    const bread = useBread();
    const onParamsChanged = (target) => {
      console.log(target);
    };

    const isCheckedValue = ref(false);
    return { bread, onParamsChanged, isCheckedValue };
  },
};
function useBread() {
  const store = useStore();
  const route = useRoute();
  return computed(() => {
    const result = {};
    store.state.category.list.forEach((topCategory) => {
      topCategory.children?.forEach((subCategory) => {
        if (subCategory.id === route.params.id) {
          result.topCategory = {
            name: topCategory.name,
            id: topCategory.id,
          };
          result.subCategory = {
            name: subCategory.name,
            id: subCategory.id,
          };
        }
      });
    });
    return result;
  });
}
</script>
