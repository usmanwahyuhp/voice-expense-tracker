import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $500</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                {/* <InfoCard /> */}
                Tryng saying : add income $500 in category salary...
                </Typography>
                <Divider className={classes.divider} />
                {/* <Form /> */}
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    {/* <List /> */}
                </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
