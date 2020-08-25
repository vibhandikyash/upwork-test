/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { Redirect } from 'react-router-dom';

import DashboardLayout from './layouts/Dashboard';
import DashboardDefaultView from './views/DashboardDefault';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboards" />
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/dashboards',
        exact: true,
        component: DashboardDefaultView
      },
    ]
  }
];

export default routes;
