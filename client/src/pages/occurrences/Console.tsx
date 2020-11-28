import React from 'react';
import { createStyles, makeStyles, Paper, Theme } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
        height: '300px',
        padding: '5px',
        marginTop: '10px',
        fontFamily: 'Consolas, monaco, monospace',
        fontSize: '12px',
        color: theme.palette.primary.main,
        overflowY: 'auto',
        fontWeight: 'bold'
    }
}));

const getConsoleContent = (occurrences: any) => {
    if (occurrences) {
        return occurrences.map((occurence: any) => <div key={occurence}>{moment(occurence).format('MMMM Do YYYY, h:mm:ss a')}</div>);
    } else {
        return (<div>Fill in the form correctly and click on Generate button...</div>)
    }
}

interface ConsoleProps {
    occurrences: any;
}

export const Console = (props: ConsoleProps) => {
    const classes = useStyles();

    return (
        <Paper elevation={2} square={false} className={classes.paper}>
            {getConsoleContent(props.occurrences)}
        </Paper>
    );
}