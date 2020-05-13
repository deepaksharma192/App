import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header from '../../../HOC/Headers'
import Class_ from './Class';
import Subject_ from './Subject';
import Chapter_ from './Chapter';
import Topic_ from './Topic';
import Video_ from './Video';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function AddClass(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <br></br>
      <br></br>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Add Class" {...a11yProps(0)} />
          <Tab label="Add Subject" {...a11yProps(1)} />
          <Tab label="Add Chapter" {...a11yProps(2)} />
          <Tab label="Add Topic" {...a11yProps(3)} />
          <Tab label="Add Video" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <Class_ {...props}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Subject_ {...props}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Chapter_ {...props}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Topic_ {...props}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Video_ {...props}/>
      </TabPanel>
     
    </div>
  );
}
export default Header(AddClass)