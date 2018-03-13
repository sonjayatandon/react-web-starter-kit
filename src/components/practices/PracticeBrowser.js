import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom"

import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';

import AddIcon from 'material-ui-icons/Add';

import PracticeCard from './PracticeCard'

import * as systemActions from '../../actions/systemActions';

import * as R from "ramda";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  button: {
    margin: theme.spacing.unit,
  },
  fab: {
    margin: theme.spacing.unit * 2,
  },
});

function PracticeGridTile(props) {
  const { id, discipline, practice, description} = props;
  return (
    <GridListTile key={id} >
      <PracticeCard discipline={discipline} practice={practice} description={description}/>
    </GridListTile>
  );
}

PracticeGridTile.propTypes = {
  id: PropTypes.string.isRequired,
  discipline: PropTypes.string.isRequired,
  practice: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

function PracticeBrowser(props) {
  const {classes, history} = props;

  const onAddPractice = () => {
    systemActions.go(history, '/practice');
  }

  const practices = [
    {
      id: '1',
      discipline: "Discipline 1",
      practice: "Practice 1",
      description: "A description of Discipline 1: Practice 1"
    },
    {
      id: '2',
      discipline: "Discipline 2",
      practice: "Practice 2",
      description: "A description of Discipline 2: Practice 2"
    },
    {
      id: '3',
      discipline: "Discipline 3",
      practice: "Practice 3",
      description: "A description of Discipline 3: Practice 3"
    },

  ];

  return (
    <div className={classes.root}>
      <Typography variant="headline" component="h2">
        Browse Practices
        <Tooltip id="tooltip-fab" className={classes.fab} title="Add Practice">
          <Button variant="fab" color="primary" aria-label="add" className={classes.button} onClick={onAddPractice}>
            <AddIcon />
          </Button>
        </Tooltip>
      </Typography>
      <GridList className={classes.gridList} cols={2.5} cellHeight='auto'>
        {
          R.map(PracticeGridTile, practices)
        }
      </GridList>
    </div>
  );
}

PracticeBrowser.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default R.pipe(
  withRouter,
  withStyles(styles))(PracticeBrowser);
