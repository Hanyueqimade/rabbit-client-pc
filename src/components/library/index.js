import XtxSkeleton from "@/components/library/XtxSkeleton";
import XtxCarousel from "@/components/library/XtxCarousel";
import xtxMore from "@/components/library/xtxMore";

export default {
  install(app) {
    app.component(XtxSkeleton.name, XtxSkeleton);
    app.component(XtxCarousel.name, XtxCarousel);
    app.component(xtxMore.name, xtxMore);
  },
};
