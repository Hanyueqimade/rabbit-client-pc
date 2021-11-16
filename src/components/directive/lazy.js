import defaultImg from "../../assets/images/200.png";

const lazy = {
  mounted(el, binding) {
    const observe = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        observe.unobserve(el);
        el.src = binding.value;
        el.error = () => {
          el.src = defaultImg;
        };
      }
    });
    observe.observe(el);
  },
};

export default lazy;
