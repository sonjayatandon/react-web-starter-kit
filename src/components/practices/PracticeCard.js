import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom"
import {connect} from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import * as R from "ramda";

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 350
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

function PracticeCard(props) {
  const { classes, discipline, practice, description } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>{discipline}</Typography>
          <Typography variant="headline" component="h2">
            {practice}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

PracticeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  discipline: PropTypes.string.isRequired,
  practice: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default R.pipe(
  connect(),
  withRouter,
  withStyles(styles))(PracticeCard);
