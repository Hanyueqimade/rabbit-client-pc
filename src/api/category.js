import { requestWithoutToken } from "@/utils/request";

export function getCategoriesApi() {
  return requestWithoutToken("/home/category/head", "get");
}

export function getTopCategoryById(id) {
  return requestWithoutToken("/category", "get", { id });
}

export function getSubCategoryFilterById(id) {
  return requestWithoutToken("/category/sub/filter", "get", { id });
}
