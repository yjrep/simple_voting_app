import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "@/views/IndexPage.vue";
import Authentication from "@/views/Authentication.vue";
import AddQuestion from "@/views/AddQuestion.vue";
import ViewQuestion from "@/views/ViewQuestion.vue";
import ViewResult from "@/views/ViewResult.vue";

const routes = [
  {
    path: "/",
    name: "IndexPage",
    component: IndexPage,
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: Authentication,
  },
  {
    path: "/questions/add",
    name: "AddQuestionPage",
    component: AddQuestion,
  },
  {
    path: "/questions",
    name: "ViewQuestionPage",
    component: ViewQuestion,
  },
  {
    path: "/results",
    name: "ResultPage",
    component: ViewResult,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
