<template>
  <AppLayout>
    <div class="container">
      <HomeCategory />
      <HomeBanner />
      <HomeNew />
      <HomeHot />
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout";
import HomeCategory from "@/views/home/components/HomeCategory";
import HomeBanner from "@/views/home/components/HomeBanner";
import HomeNew from "@/views/home/components/HomeNew";
import HomeHot from "@/views/home/components/HomeHot";
export default {
  name: "homePage",
  components: { HomeHot, HomeNew, HomeBanner, HomeCategory, AppLayout },
};
</script>

<style></style>
