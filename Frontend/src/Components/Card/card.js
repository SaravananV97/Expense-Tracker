import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    margin: 20 
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


function SimpleCard(props) {
  const { classes } = props;
  const card_type = props.isExpense?"Expense":"Income";
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {card_type} Summary #{props.count}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.expense.date}
        </Typography>
        <Typography variant="h5" component="h2">
            Rs.{props.expense.amount}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.expense.category}
        </Typography>
        <Typography component="p">
            {props.expense.details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Manage</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
