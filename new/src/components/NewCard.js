import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    width: 200,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    margin: 'auto',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function NewCard(props) {
  const { classes, theme } = props;
  return (
    <div className="cardOutside">
      <Card className={"cardBase " + classes.card}>
        <div className={classes.details} >
          <CardContent className={classes.content}>
            <Typography variant="headline">{props.title}</Typography>
            {/* <Typography variant="subheading" color="textSecondary">
              Mac Miller
            </Typography> */}
            <div style={{textAlign: 'center', marginTop:'4px'}}>
              {props.tags.map((tag, index) => {
                return <div 
                style={{
                  backgroundColor:tag.color,
                  margin: '3px',
                  display: 'inline',
                  padding: '3px',
                  fontSize: '0.4em',
                  borderRadius: '3px',
                  cursor: 'pointer',
                }}
                >
                  {tag.title}
                </div>;
              })}
          </div>

          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="Play/pause" onClick={props.click}>
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="Next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={props.image}
          title="Live from space album cover"
        />
      </Card>
      {/* <DetailModal/> */}
    </div>
  );
}

NewCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NewCard);

// import React, { Component } from 'react';
// import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import Button from 'material-ui/Button';
// import Chip from 'material-ui/Chip';
// import Avatar from 'material-ui/Avatar';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// import bubble from '../images/bubble_sort.png';

// import DetailModal from './DetailModal';

// const styles = {
//   chip: {
//     margin: 4,
//   },
//   wrapper: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
// };

// class NewCard extends Component {
//   render() {
//     return (
//       <MuiThemeProvider>
//         <Card style={ {'max-width': '450px', 'margin':'30px auto' } }>
//           <CardMedia
//             overlay={<CardTitle title={this.props.title} subtitle={this.props.description} />}
//           >
//             <img src={this.props.image} alt="" />
//           </CardMedia>
//           {/* <CardTitle title={this.props.title} subtitle="Card subtitle" /> */}
//           <CardText>

//             <Chip
//               style={styles.chip}
//             >
//               <Avatar size={32}>A</Avatar>
//               Text Chip
//             </Chip>

//           </CardText>
//           <CardActions>
//             <DetailModal url={this.props.url} />
//           </CardActions>
//         </Card>
//       </MuiThemeProvider>
//     );
//   }
// }


// export default NewCard;