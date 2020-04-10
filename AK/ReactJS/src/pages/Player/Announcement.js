import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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
}));



export default function CommentList(props) {
    const classes = useStyles();
let t =props.announcement.map((v,i) => {
    return (
        <Paper key={i} className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Avatar>A</Avatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                    <Typography noWrap>{v.announcement}</Typography>
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
