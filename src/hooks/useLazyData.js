import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

export default function useLazyData(apiFunction) {
  //创建元素引用对象
  const target = ref();
  // 存储数据
  const result = ref();
  // 监听元素进入可视区
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      //进入可视区
      if (isIntersecting) {
        // 停止监听
        stop();
        // 获取数据
        apiFunction().then((data) => (result.value = data.result));
      }
    },
    { threshold: 0 }
  );
  return { target, result };
}
