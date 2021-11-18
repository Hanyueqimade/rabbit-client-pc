<script>
import { h } from "vue";

export default {
  name: "XtxBread",
  render() {
    const items = this.$slots.default();
    const result = [];
    //在恰当的时候加'>'
    items.forEach((item, index) => {
      result.push(item);
      if (index < items.length - 1) {
        result.push(h("i", { class: "iconfont icon-angle-right" }));
      }
    });
    return h("div", { class: "xtx-bread" }, result);
  },
};
</script>

<style scoped lang="less">
.xtx-bread {
  display: flex;
  padding: 25px 10px;
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>
