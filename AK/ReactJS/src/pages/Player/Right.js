import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import { Scrollbars } from 'react-custom-scrollbars';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: "70vh",
  },
  listSection: {
    backgroundColor: '#fff',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  Active:{
    backgroundColor:"#0ec1ff"
  },
  bars:{
    width:"100px"
  },
  nxt:{
    marginRight:'25px'
  },
  size:{
  width:'99px',
  height:'53px'  
  }
}));

export default function Right(props) {
  const classes = useStyles();
  let videoTime = props.bookmark.videoTime?props.bookmark.videoTime:{};
  function getPer(v,total){
    let  p = parseInt(v) * 100/total;
    if(p){
       return p;
    }else{
      return 0;
    }
   
  }
  return (
    <Paper elevation={3}>
    
    <List className={classes.root} subheader={<li />} style={{ marginLeft: 0, marginRight: 0,  borderRight: 1, borderTop: 1 }}>
    <Scrollbars style={{ height: 400 }}>
      {props.courseById.topics.map((v, k) => (
        <li key={`section-${v.title}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader className={(props.currentTopic === v._id?classes.Active:"")} style={{ background: "#626CCF",color:'#fff' }}>{`${v.title}`}</ListSubheader>
            {v.sub_topics.map((item, ke) => (
              <ListItem className={(props.currentVideo === item._id?classes.Active:"")} key={`item-${v.title}-${item.title}`} onClick={()=>{props.selectVideo(item,getPer(videoTime[item._id + "__" +  item.topic_id], item.duration))}} button>
                <List className={classes.nxt}>
                <ListItemIcon>
                <Avatar variant="square" className={classes.size} alt="Remy Sharp" src={item.img} />
                </ListItemIcon>
                <LinearProgress className={classes.bars} variant="determinate" value={getPer(videoTime[item._id + "__" +  item.topic_id], item.duration)} color="secondary" />
                </List>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
       </Scrollbars>
    </List>
    </Paper>
  );
}
