/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, Typography } from '@material-ui/core';

import { messageService } from '../../../../_services';

const useStyles = makeStyles(theme => ({
  root: {
    background: "#3f51b5",
    color: "#FFF"
  },
  content: {
    paddingTop: 0
  },
  itemDivider: {
    borderBottomColor: 'rgba(255,255,255,0.2)'
  },
  actions: {
    paddingTop: 0,
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
  }
}));

const RealTimeGadget = ({ className, action, title, ...rest }) => {
  const classes = useStyles();
  const [message, setMessage] = useState();

  let myTimeout;
  useEffect(() => {
    const subscription = messageService.onMessage(action).subscribe(message => {
      clearTimeout(myTimeout);
      if (message) {
        setMessage(message.data);
        myTimeout = setTimeout(() => {
          setMessage('N/A');
        }, 1000);
      } else {
        setMessage('');
      }
    });
    return subscription.unsubscribe;
  }, [action]);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        action={
          <Typography color="inherit" gutterBottom variant="h3">
            {message || 'N/A'}
          </Typography>
        }
        subheaderTypographyProps={{ color: 'inherit' }}
        title={title}
        titleTypographyProps={{ color: 'inherit' }}
      />
    </Card>
  );
};

RealTimeGadget.propTypes = {
  className: PropTypes.string
};

export default RealTimeGadget;
