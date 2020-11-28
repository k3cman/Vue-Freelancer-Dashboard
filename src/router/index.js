import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import NotFound from "../components/Shared/NotFound/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tracker",
    name: "Tracker",
    component: () => import("../views/Tracker/Tracker.vue"),
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../views/Todo/Todo.vue"),
  },
  {
    path: "/clients",
    name: "Clients",
    component: () => import("../views/Clients/Clients.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects/Projects.vue"),
  },
  {
    path: "/invoices",
    name: "Invoices",
    component: () => import("../views/Invoices/Invoices.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings/Settings.vue"),
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
