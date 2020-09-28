import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  boxContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.default,
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
  },
}))
