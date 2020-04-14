import React from 'react';
import Headers from '../../HOC/Headers';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Chart } from 'react-charts'

import CanvasJSReact from '../../canvas/canvasjs.react';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:'300px',
    },
    paper_new: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:'auto',
    },
  }));
function LeaderBoard(props){
    const classes = useStyles();


    const data = React.useMemo(
        () => [
          {
            label: 'Series 1',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
          },
          {
            label: 'Series 2',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
          }
        ],
        []
      )
     
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )

      

      const options_1 = {
        animationEnabled: true,
        theme: "light2",
        title:{
          text: "Most Popular Social Networking Sites"
        },
        axisX: {
          title: "Social Network",
          reversed: true,
        },
        axisY: {
          title: "Monthly Active Users"
         
        },
        data: [{
          type: "bar",
          dataPoints: [
            { y:  2200000000, label: "Facebook" },
            { y:  1800000000, label: "YouTube" },
            { y:  800000000, label: "Instagram" },
            { y:  563000000, label: "Qzone" },
            { y:  376000000, label: "Weibo" },
            { y:  336000000, label: "Twitter" },
            { y:  330000000, label: "Reddit" }
          ]
        }]
      }

      const options = {
        theme: "dark2",
        animationEnabled: true,
        exportFileName: "New Year Resolutions",
        exportEnabled: false,
        title:{
          text: "Top Categories of New Year's Resolution"
        },
        data: [{
          type: "pie",
          showInLegend: true,
          legendText: "{label}",
          toolTipContent: "{label}: <strong>{y}%</strong>",
          indexLabel: "{y}%",
          indexLabelPlacement: "inside",
          dataPoints: [
            { y: 32, label: "Health" },
            { y: 22, label: "Finance" },
            { y: 15, label: "Education" },
            { y: 19, label: "Career" },
            { y: 5, label: "Family" },
            { y: 7, label: "Real Estate" }
          ]
        }]
      }


    return(
        <div>
          <Grid container justify ="center">
            <Grid item xs={8} xs-offset-2 alignContent='center'>
                <Paper className={classes.paper} elevation={3} style={{marginTop:'5ch'}}>
                    <Chart data={data} axes={axes} />
                </Paper>
            </Grid>
            <Grid item xs={8} xs-offset-2 alignContent='center'>
                <Paper className={classes.paper_new} elevation={3} style={{marginTop:'5ch'}}>
                    <CanvasJSChart options = {options_1}/>
                </Paper>
            </Grid>
            <Grid item xs={8} xs-offset-2 alignContent='center'>
                <Paper className={classes.paper_new} elevation={3} style={{marginTop:'5ch'}}>
                  <Grid item xs={12}>
                    <CanvasJSChart options = {options}/>
                  </Grid>
                </Paper>
            </Grid>
          </Grid>
        </div>
    )

}

export default Headers(LeaderBoard)