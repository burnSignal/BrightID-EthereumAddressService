import React from 'react'

import { styled, useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const Restyled = styled(Button)({
  border: '2px solid #cacaca',
  borderRadius: 5,
  padding: '.5em 2.25em',
  color: 'black !important',
  outlineColor: '#cacaca !important',
  '&:hover': {
    borderColor: '#e78a64 !important',
    outlineColor: '#e78a64 !important'
  },
  '&:active': {
    borderColor: '#e78a64 !important',
    outlineColor: '#e78a64 !important'
  },
});

export default Restyled;
