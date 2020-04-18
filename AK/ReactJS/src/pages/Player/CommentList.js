import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';
import {toHHMMSS} from './../../modules/Comman'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px`,
        padding: theme.spacing(2),
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      fontSize:14
    }
}));



export default function CommentList(props) {
    const classes = useStyles();
   
    let t = props.videoNote.map((v, i) => {
        return (
            <Paper key={i} className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2} onClick={() => { props.JumbtoVideoFromNote(v) }}>
                    <Grid item>
                        <Avatar variant="square"  className={classes.orange}><small>{toHHMMSS(v.time)}</small></Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>{v.note}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    })
    return (
        <div className={classes.root}>
            {t}
        </div>
    );
}
