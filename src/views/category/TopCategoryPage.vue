<template>
  <AppLayout>
    <div class="container">
      <XtxBread>
        <XtxBreadItem path="/">首页</XtxBreadItem>
        <Transition name="fade-right" mode="out-in">
          <XtxBreadItem :key="topCategory?.id">{{
            topCategory?.name
          }}</XtxBreadItem>
        </Transition>
      </XtxBread>
      <XtxCarousel
        :carousels="banners"
        :autoPlay="true"
        v-if="banners"
        :style="{ height: '500px' }"
      />
      <ShowSubCategoryList
        :subCategories="topCategory.children"
        v-if="topCategory"
      />

      <CommendGoods />
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout";
import XtxBread from "@/components/library/XtxBread";
import XtxBreadItem from "@/components/library/XtxBreadItem";
import ShowSubCategoryList from "@/views/category/components/ShowSubCategoryList";
import CommendGoods from "@/views/category/components/CommendGoods";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";
import useBanners from "@/hooks/useBanners";
export default {
  name: "TopCategoryPage",
  components: {
    XtxBreadItem,
    XtxBread,
    AppLayout,
    ShowSubCategoryList,
    CommendGoods,
  },
  setup() {
    const topCategory = useCategory();
    const { banners, getData } = useBanners();
    getData();
    return { topCategory, banners };
  },
};
function useCategory() {
  const store = useStore();
  const route = useRoute();
  return computed(() => {
    return store.state.category.list.find(
      (item) => item.id === route.params.id
    );
  });
}
</script>
