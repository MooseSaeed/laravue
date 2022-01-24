import { options } from "laravel-mix";
import { createRouter, createWebHashHistory } from "vue-router";

import CompaniesIndex from "../components/companies/CompaniesIndex.vue";

const routes = [
    {
        path: "/dashboard",
        name: "companies.index",
        component: CompaniesIndex,
    },
];

export default createRouter(options: {
    history: createWebHashHistory(),
    routes
})
