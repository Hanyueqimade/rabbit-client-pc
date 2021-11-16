<template>
  <AppLayout>
    <div class="container">
      <HomeCategory />
      <HomeBanner />
      <HomeNew />
      <HomeHot />
      <HomeBrand />
      <HomeProduct />
      <HomeSpecial />
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout";
import HomeCategory from "@/views/home/components/HomeCategory";
import HomeBanner from "@/views/home/components/HomeBanner";
import HomeNew from "@/views/home/components/HomeNew";
import HomeHot from "@/views/home/components/HomeHot";
import HomeBrand from "@/views/home/components/HomeBrand";
import HomeProduct from "@/views/home/components/HomeProduct";
import HomeSpecial from "@/views/home/components/HomeSpecial";
export default {
  name: "homePage",
  components: {
    HomeSpecial,
    HomeProduct,
    HomeBrand,
    HomeHot,
    HomeNew,
    HomeBanner,
    HomeCategory,
    AppLayout,
  },
};
</script>

<style></style>
