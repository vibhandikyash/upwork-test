import React from 'react';
import { Grid } from '@material-ui/core';

import { Page } from 'components';
import {
  Header,
  RealTimeGadget
} from './components';

const DashboardDefault = () => {

  return (
    <Page
      title="Default Dashboard"
    >
      <Header />
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xs={12}
        >
          <RealTimeGadget action='temprature' title='Temprature' />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xs={12}
        >
          <RealTimeGadget action='purification' title='Air Purity' />
        </Grid>
        <Grid
          item
          lg={3}
          xs={12}
        >
          <RealTimeGadget action='humidity' title='Humidity' />
        </Grid>
      </Grid>
    </Page>
  );
};

export default DashboardDefault;
