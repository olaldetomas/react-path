import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: 250,
        height: 180,
        margin: 10,
        borderRadius: 10
    },
    timeLine: {
        display: 'flex',
        minWidth: 50,
        height: 170,
        width: 50,
        margin: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bolita: {
        height: 27,
        width: 27,
        borderRadius: 27,
        backgroundColor: 'gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerBolita: {
        display: 'flex',
        height: 17,
        width: 17,
        borderRadius: 17,
        backgroundColor: theme.palette.background.paper
    },
    lineDivider: {
        display: 'flex',
        height: 5,
        width: 4,
        borderRadius: 2,
        backgroundColor: '#5e5c5b',
    }
}));


export default function CardPath() {
    const classes = useStyles();

    return (
        <div>
            <Card elevation={3} className={classes.root}>
                <div className={classes.timeLine}>
                    <div className={classes.bolita}>
                        <div className={classes.centerBolita}>

                        </div>
                    </div>
                    <div className={classes.lineDivider} style={{marginBottom: 3,marginTop: 3}}>
                    </div>
                    <div className={classes.lineDivider} style={{marginBottom: 3}}>
                    </div>
                    <div className={classes.bolita}>
                        <div className={classes.centerBolita}>

                        </div>
                    </div>
                    <div className={classes.lineDivider} style={{marginBottom: 3,marginTop: 3}}>
                    </div>
                    <div className={classes.lineDivider} style={{marginBottom: 3}}>
                    </div>
                    <div className={classes.bolita}>
                        <div className={classes.centerBolita}>

                        </div>
                    </div>
                </div>
                <CardContent>
                    Node.ju

                    Descripcion
                    de las cosas
                    que voy haciendo
                    y que se yo
                      
                    
                    aslkda asda
                    aklsd
                     asd as asd a
                </CardContent>
            </Card>
        </div>
    );
}