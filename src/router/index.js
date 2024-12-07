import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ReviewDetails from "../views/DetailsReview.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/review/:id",
    name: "ReviewDetails",
    component: ReviewDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
