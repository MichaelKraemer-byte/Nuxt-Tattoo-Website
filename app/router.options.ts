import type { RouterScrollBehavior } from "vue-router";

const scrollBehavior: RouterScrollBehavior = async (
  to,
  from,
  savedPosition
) => {
  if (to.hash) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return {
      el: to.hash,
      top: 120,
      behavior: "auto",
    };
  }
  if (savedPosition) {
    return savedPosition;
  }
  return { top: 0 };
};

export default {
  scrollBehavior,
};
