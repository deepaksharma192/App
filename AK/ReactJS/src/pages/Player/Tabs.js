import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Right from './Right'
import CommentList from './CommentList'
import Announcement from './Announcement'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      align="left"
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function Tabss(props) {
  const [value, setValue] = React.useState("two");
  const handleChange = (event, newValue) => {
    console.log(event)
    setValue(newValue);
    props.updaateBookmark('TAB', newValue).then(res=>{
    
    });;
  };
  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        {props.state.width < 959 && <Tab label="Menu" value="one" />}
        <Tab label="Overview" value="two" />
        <Tab label="Announcement" value="three" />
        <Tab label="Video Note" value="four" />
      </Tabs>
      {props.state.width < 959 && <TabPanel value={value} index="one">
        <Right {...props} selectVideo={props.selectVideo} />
      </TabPanel>
      }
      <TabPanel value={value} index="two">
        {props.courseById.description}
      </TabPanel>
      <TabPanel value={value} index="three">
        {props.announcement && <Announcement {...props} />}
      </TabPanel>
      <TabPanel value={value} index="four">
        {props.videoNote && <CommentList {...props} />}
      </TabPanel>
    </Paper>
  );
}