import React from 'react';
import { getUserDetail } from '../redux/action/userDetailsAction';
import { getBookmarkByIds, updaateBookmarksToStore, updaateBookmarks } from '../redux/action/bookmarkAction';
import { getVideoNoteByids, createVideoNotes } from '../redux/action/videoNoteAction';
import { getAnnouncementByids } from '../redux/action/announcementAction';
import { getCourseByIds, getAllClasses } from '../redux/action/courseAction';
import { connect } from "react-redux";
import jumpTo, { go } from '../modules/Navigation'
import { sendOtp, veryfyOtps } from '../redux/action/tokenAction'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Login from '../pages/Login'
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ClassIcon from '@material-ui/icons/Class';
import PeopleIcon from '@material-ui/icons/People';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Avatar from '@material-ui/core/Avatar';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  fontt: {
    margin: '5px 25px',
    fontSize: '12px',
  },
  fontt_sizz: {
    fontSize: '12px',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

  },
  logo: {
    maxWidth: 100,
  },
  colorr: {
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop: '3%',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: '15px auto',
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

// const imagetag={
//     img:KoolGuru
// }
const Headers = (HocComponent) => {
  function EH(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [openLogin, setOpenLogin] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [otp, setOtp] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };
    const logout = () => {
      go('/Home');
      localStorage.removeItem('auth');
      localStorage.clear();

    }

    function icon(index) {
      switch (index) {
        case 0: return <DashboardIcon />
        case 1: return <CalendarTodayIcon />
        case 2: return <ClassIcon />
        case 3: return <PeopleIcon />
        case 4: return <VideoLibraryIcon />
        default:
      }
    }

    const loginSubmit = (prop) => {
      let { number } = prop;
      sendOtp(number).then((res) => {
        setOtp(res.data.otp);
      });
    }
    const veryfyOtp = (prop) => {
      return new Promise((resolve, reject) => {
        let { number, otp } = prop;
        props.veryfyOtps(number, otp).then((res) => {
          setOpenLogin(false);
          jumpTo('/dashboard');
          go('/dashboard');
          resolve(res)
        }).catch(err => {
          reject(err)
        });
      })

    }
    const LoginOpen = () => {
      setOpenLogin(true)
    }
    const LoginClose = () => {
      setOpenLogin(false)
    }
    const id = openLogin ? 'simple-popover' : undefined;
    return (
      <div className={classes.root}>
        {openLogin && <Login {...props} otp={otp} handleClose={LoginClose} loginSubmit={loginSubmit} veryfyOtp={veryfyOtp} />}
        <AppBar position="fixed" color='inherit'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })} >
          <Toolbar>
            {props.token && <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}><MenuIcon /></IconButton>}
            <img src={process.env.PUBLIC_URL + '/assets/images/applogo/logo.png'} alt="logo" className={classes.logo} />
            <div className={classes.toolbarButtons}>
              {!props.token && <Tooltip className={classes.fontt} disableFocusListener title="Home">
                <Button>Home</Button>
              </Tooltip>}
              {!props.token && <Tooltip className={classes.fontt} disableFocusListener title="Features">
                <Button>Features</Button>
              </Tooltip>}
              {!props.token && <Tooltip className={classes.fontt} disableFocusListener title="Syallabus">
                <Button>Syallabus</Button>
              </Tooltip>}
              {!props.token && <Tooltip className={classes.fontt} disableFocusListener title="Pricing">
                <Button>Pricing</Button>
              </Tooltip>}
              {!props.token && <Tooltip className={classes.fontt} disableFocusListener title="Race to Space">
                <Button>Race to Space</Button>
              </Tooltip>}
              {!props.token && <Tooltip className={classes.fontt} disableFocusListener title="Courses">
                <Button>Courses</Button>
              </Tooltip>}
              {!props.token && <Button variant="outlined" onClick={LoginOpen} aria-describedby={id} color="inherit">Login</Button>}
              {props.token && <IconButton color="inherit"> <NotificationsIcon /></IconButton>}
              {props.token && <IconButton onClick={handleClick} color="inherit"> <PersonAddIcon /></IconButton>}

              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem onClick={() => { handleClose(); jumpTo('/UserProfile') }}>
                  <ListItemIcon>
                    <SendIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </StyledMenuItem>
                <StyledMenuItem onClick={logout}>
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </StyledMenuItem>

              </StyledMenu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Box bgcolor="text.primary">
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: '#fff' }} /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" align="center" className={classes.large} />
              {[{ text: 'Dashboard', href: "/dashboard" }, { text: 'Calender', href: "/dashboard" }, { text: 'Classes', href: "/dashboard" }, { text: 'LeaderBoard', href: "/leaderboard" }, { text: 'Videos', href: "/leaderboard" }].map((item, index) => (
                <ListItem button key={item.text}>
                  <ListItemIcon className={classes.colorr}>
                    {icon(index)}
                    {/* {index % 2 === 0 ? <DashboardIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <Link href={item.href} variant="body2">
                    <ListItemText primary={item.text} className={classes.colorr} />
                  </Link>
                </ListItem>
              ))}

            </List>
            <Divider />
          </Box>
        </Drawer>
        <main className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
          <br></br>
          <HocComponent className={classes.drawerHeader} {...props} />
        </main>

      </div>
    );

  }
  return connect(mapStoreToProps, mapDispatchToProps)(EH)
}

const mapStoreToProps = state => ({
  user: state.user.user_details,
  token: state.token.user_token,
  bookmark: state.bookmark.bookmark_data,
  courseById: state.course.course_data,
  videoNote: state.videoNote.video_note_data,
  announcement: state.announcement.announcement_data,
  grade:state.course.classes_data,
})
const mapDispatchToProps = {
  getUserDetail,
  getBookmarkByIds,
  getCourseByIds,
  updaateBookmarksToStore,
  updaateBookmarks,
  getVideoNoteByids,
  createVideoNotes,
  getAnnouncementByids,
  veryfyOtps,
  getAllClasses
}
export default Headers;
