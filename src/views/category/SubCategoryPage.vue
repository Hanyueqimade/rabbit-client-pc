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
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout";
import XtxBread from "@/components/library/XtxBread";
import XtxBreadItem from "@/components/library/XtxBreadItem";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "SubCategoryPage",
  components: { XtxBreadItem, XtxBread, AppLayout },
  setup() {
    const bread = useBread();

    return { bread };
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
