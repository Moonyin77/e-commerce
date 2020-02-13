import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function SimpleExpansionPanel({
  header,
  children,
  className,
  ...rest
}) {
  const classes = useStyles();

  return (
    <ExpansionPanel
      className={className}
      square={true}
      {...rest}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${header}-controls`}
        id={`panel-${header}-id`}
      >
        <Typography className={classes.heading}>{header}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails children={children} />
    </ExpansionPanel>
  );
}
