import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {  styled } from '@mui/material/styles';



const useStylesBootstrap = styled((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}


export default function CustomizedTooltips(props) {
  return (
    <div>
      <BootstrapTooltip title= 'click to copy the link'>
        <Button>{props.children}</Button>
      </BootstrapTooltip>
    </div>
  );
}
