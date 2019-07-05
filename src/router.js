import Vue from "vue";
import Router from "vue-router";
import Land from "./views/Land";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Land",
      component: Land
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/Published",
      name: "Published",
      component: () => import("./views/Published.vue")
    },
    {
      path: "/Statistics",
      name: "Statistics",
      component: () => import("./views/Statistics.vue")
    },
    {
      path: "/Push",
      name: "Push",
      component: () => import("./views/Push.vue")
    },
    {
      path: "/Export",
      name: "Export",
      component: () => import("./views/Export.vue")
    },
    {
      path: "/PictureUpload",
      name: "PictureUpload",
      component: () => import("./views/PictureUpload.vue")
    },
    {
      path: "/SignOut",
      name: "SignOut",
      component: () => import("./views/SignOut.vue")
    }
  ]
});
