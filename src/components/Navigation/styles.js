import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240;

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.background.default,
        borderColor: theme.palette.background.default
      },
      toolbar: {
        minHeight: 90,
        width: '100%',
        backgroundColor: theme.palette.background.default
      },
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
      listItem: {
        borderRadius: 50,
        maxWidth: 200
      },
      list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }
}))