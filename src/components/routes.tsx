import * as React from "react";
import { RouteConfig } from "react-router-config";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import ProjectManagersPage from "./pages/ProjectManagersPage";
import ProjectControlsPage from "./pages/ProjectControlsPage";
import ManagersPage from "./pages/ManagersPage";
import ReportsPage from "./pages/ReportsPage";
import { TodoPage } from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";
import PageLayout from "./layouts/PageLayout";
import TimekeepersPage from "./pages/TimekeepersPage";

export const routes: RouteConfig[] = [
    {
        path: "/home",
        exact: true,
        component: () => (<HomePage />),
    },
    {
      path: "/users",
      component: () => (<UsersPage />),
    },
    {
      path: "/timekeepers",
      component: () => (<TimekeepersPage />),
    },
    {
      path: "/managers",
      component: () => (<ManagersPage />),
    },
    {
      path: "/projectmanagers",
      component: () => (<ProjectManagersPage />),
    },
    {
      path: "/projectcontrols",
      component: () => (<ProjectControlsPage />),
    },
    {
      path: "/reports",
      component: () => (<ReportsPage />),
    },
    {
        path: "/todo",
        component: () => (<TodoPage />),
    },
    {
        path: "/about",
        component: () => (<AboutPage />),
    },
];

export const route = (
    <Switch>
        <Route path="/" component={PageLayout} />
    </Switch>
);
