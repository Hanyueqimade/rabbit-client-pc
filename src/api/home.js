// import request from "@/utils/request";
import { requestWithoutToken } from "@/utils/request.js";

export function getHotBrands(limit = 6) {
  return requestWithoutToken("/home/brand", "get", { limit });
}

export function getBanners(distributionSite = 1) {
  return requestWithoutToken("/home/banner", "get", { distributionSite });
}

export function getNewGoods(limit = 4) {
  return requestWithoutToken("/home/new", "get", { limit });
}
export function getHotGoods() {
  return requestWithoutToken("/home/hot", "get");
}

export function getHotBrand(limit = 10) {
  return requestWithoutToken("/home/brand", "get", { limit });
}

export function getProducts() {
  return requestWithoutToken("/home/goods", "get");
}

export function getSpecial(limit = 3) {
  return requestWithoutToken("/home/special", "get", { limit });
}
