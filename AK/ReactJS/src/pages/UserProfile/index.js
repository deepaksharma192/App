import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Headers from '../../../src/HOC/Headers';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function UserProfile(){
    const classes = useStyles();
    return(
        <div>
            <CssBaseline />
            <Container maxWidth="sm">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Box style={{  marginBottom:'3ch',marginTop:'1ch' }}>
                            <Typography variant="h6" align="left" nowrap={true}>
                                Personal Details
                            </Typography>
                        </Box>
                        <Box borderTop={1}>
                            <Box style={{  marginTop:'2ch',width: '100%', overflow:'hidden',marginBottom:'2ch' }}>
                                <Box  component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography align="left" nowrap={true}>
                                        Name
                                    </Typography>
                                </Box>
                                <Box component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        Rohit Singh
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box borderTop={1}>
                            <Box style={{  marginTop:'2ch',width: '100%', overflow:'hidden',marginBottom:'2ch' }}>
                                <Box  component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        Email-id
                                    </Typography>
                                </Box>
                                <Box component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        rohitaug88@gmail.com
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box borderTop={1}>
                            <Box style={{  marginTop:'2ch',width: '100%', overflow:'hidden',marginBottom:'2ch' }}>
                                <Box  component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        Gender
                                    </Typography>
                                </Box>
                                <Box component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        Male
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box borderTop={1}>
                            <Box style={{  marginTop:'2ch',width: '100%', overflow:'hidden',marginBottom:'2ch' }}>
                                <Box  component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        City
                                    </Typography>
                                </Box>
                                <Box component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        Noida
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box borderTop={1}>
                            <Box style={{  marginTop:'2ch',width: '100%', overflow:'hidden',marginBottom:'2ch' }}>
                                <Box  component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        Date of Birth
                                    </Typography>
                                </Box>
                                <Box component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        -
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Box style={{  marginBottom:'3ch' }}>
                            <Typography variant="h6" align="left" nowrap={true}>
                                Account Details
                            </Typography>
                        </Box>
                        <Box borderTop={1}>
                            <Box style={{  marginTop:'2ch',width: '100%', overflow:'hidden',marginBottom:'2ch' }}>
                                <Box  component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        Register Mobile Number
                                    </Typography>
                                </Box>
                                <Box component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        9998765435
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box borderTop={1}>
                            <Box style={{  marginTop:'2ch',width: '100%', overflow:'hidden',marginBottom:'2ch' }}>
                                <Box  component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        Password
                                    </Typography>
                                </Box>
                                <Box component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        *******
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Box style={{  marginBottom:'3ch' }}>
                            <Typography variant="h6" align="left" nowrap={true}>
                                Address Details
                            </Typography>
                        </Box>
                        <Box borderTop={1}>
                            <Box style={{  marginTop:'2ch',width: '100%', overflow:'hidden',marginBottom:'2ch' }}>
                                <Box  component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        Address
                                    </Typography>
                                </Box>
                                <Box component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        Palm Olmpia Society
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box borderTop={1}>
                            <Box style={{  marginTop:'2ch',width: '100%', overflow:'hidden',marginBottom:'2ch' }}>
                                <Box  component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        Pincode
                                    </Typography>
                                </Box>
                                <Box component="div" display="inline" style={{ width: '50%',float:'left' }} >
                                    <Typography  align="left" nowrap={true}>
                                        208006
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

            </Grid>
            </Container>
        </div>
    )
}

export default Headers(UserProfile)