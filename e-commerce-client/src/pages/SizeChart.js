import React, { Component } from 'react'

// MUI
import Container from '@material-ui/core/Container';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

class SizeChart extends Component {
    render() {
        const { classes } = this.props
        function createData(size, s, m, l, xl, xxl) {
            return { size, s, m, l, xl, xxl }
          }
          
          const rows = [
            createData('Poitrine', "88 - 92", "93 - 97", "98 - 102", "103 - 108", "109 - 114"),
            createData('Taille', "76 - 80", "81 - 84", "85 - 90", "91 - 96", "97 - 102"),
            createData('Hanches', "90 - 94", "95 - 98", "99 - 104", "105 - 110", "111 - 116"),
          ]

          const rowsf = [
            createData('Poitrine', "79 - 82", "83 - 87", "88 - 93", "94 - 99", "100 - 105"),
            createData('Taille', "61 - 64", "65 - 69", "70 - 75", "76 - 81", "82 - 87"),
            createData('Hanches', "89 - 92", "93 - 97", "98 - 103", "104 - 109", "110 - 115"),
          ]

          const rowsgf = [
            createData('Tour de main', "168 - 176", "176 - 184", "184 - 192", "192 - 200", "200 - 208"),
          ]

          const rowsgh = [
            createData('Tour de main', "198 - 206", "206 - 214", "214 - 222", "222 - 230", "230 - 245"),
          ]


        return (
            <Container>
                <br></br>
                <Typography variant="body1">Vêtements</Typography>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>Homme</TableCell>
                        <TableCell className={classes.head} align="right">S</TableCell>
                        <TableCell className={classes.head} align="right">M</TableCell>
                        <TableCell className={classes.head} align="right">L</TableCell>
                        <TableCell className={classes.head} align="right">XL</TableCell>
                        <TableCell className={classes.head} align="right">XXL</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.size}>
                        <TableCell component="th" scope="row">
                            {row.size}
                        </TableCell>
                        <TableCell align="right">{row.s}</TableCell>
                        <TableCell align="right">{row.m}</TableCell>
                        <TableCell align="right">{row.l}</TableCell>
                        <TableCell align="right">{row.xl}</TableCell>
                        <TableCell align="right">{row.xxl}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>Femme</TableCell>
                        <TableCell className={classes.head} align="right">XS</TableCell>
                        <TableCell className={classes.head} align="right">S</TableCell>
                        <TableCell className={classes.head} align="right">M</TableCell>
                        <TableCell className={classes.head} align="right">L</TableCell>
                        <TableCell className={classes.head} align="right">XL</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rowsf.map(row => (
                        <TableRow key={row.size}>
                        <TableCell component="th" scope="rowf">
                            {row.size}
                        </TableCell>
                        <TableCell align="right">{row.s}</TableCell>
                        <TableCell align="right">{row.m}</TableCell>
                        <TableCell align="right">{row.l}</TableCell>
                        <TableCell align="right">{row.xl}</TableCell>
                        <TableCell align="right">{row.xxl}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    </Table>
                    <br></br>
                    <Typography>Gant</Typography>
                    <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>Femme</TableCell>
                        <TableCell className={classes.head} align="right">XS</TableCell>
                        <TableCell className={classes.head} align="right">S</TableCell>
                        <TableCell className={classes.head} align="right">M</TableCell>
                        <TableCell className={classes.head} align="right">L</TableCell>
                        <TableCell className={classes.head} align="right">XL</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rowsgf.map(row => (
                        <TableRow key={row.size}>
                        <TableCell component="th" scope="rowf">
                            {row.size}
                        </TableCell>
                        <TableCell align="right">{row.s}</TableCell>
                        <TableCell align="right">{row.m}</TableCell>
                        <TableCell align="right">{row.l}</TableCell>
                        <TableCell align="right">{row.xl}</TableCell>
                        <TableCell align="right">{row.xxl}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>Homme</TableCell>
                        <TableCell className={classes.head} align="right">S</TableCell>
                        <TableCell className={classes.head} align="right">M</TableCell>
                        <TableCell className={classes.head} align="right">L</TableCell>
                        <TableCell className={classes.head} align="right">XL</TableCell>
                        <TableCell className={classes.head} align="right">XXL</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rowsgh.map(row => (
                        <TableRow key={row.size}>
                        <TableCell component="th" scope="row">
                            {row.size}
                        </TableCell>
                        <TableCell align="right">{row.s}</TableCell>
                        <TableCell align="right">{row.m}</TableCell>
                        <TableCell align="right">{row.l}</TableCell>
                        <TableCell align="right">{row.xl}</TableCell>
                        <TableCell align="right">{row.xxl}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Container>
        )
    }
}

//Stylesheet
const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      head: {
        backgroundColor: '#eeba30',
        color: '#ffffff',
      },
      body: {
        fontSize: 14,
      },
})

export default withStyles(styles)(SizeChart)