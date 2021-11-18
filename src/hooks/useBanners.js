import { ref } from "vue";
import { getBanners } from "@/api/home";

export default function useBanners() {
  const banners = ref();
  const getData = (distributionSite) =>
    getBanners(distributionSite).then((data) => {
      banners.value = data.result;
    });
  return { banners, getData };
}
