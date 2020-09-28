import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 250,
    height: 180,
    margin: 10,
    borderRadius: 10,
  },
  timeLine: {
    display: 'flex',
    minWidth: 50,
    height: 170,
    width: 50,
    margin: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bolita: {
    height: 27,
    width: 27,
    borderRadius: 27,
    backgroundColor: theme.palette.timeline.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerBolita: {
    display: 'flex',
    height: 17,
    width: 17,
    borderRadius: 17,
    backgroundColor: theme.palette.background.paper,
  },
  lineDivider: {
    display: 'flex',
    height: 5,
    width: 4,
    borderRadius: 2,
    backgroundColor: theme.palette.timeline.main,
  },
  cardPathContent: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 0
  },
  cardActions: {
    width: '100%', 
    justifyContent: 'flex-end'
  },
  iconButton: {
    color: theme.palette.timeline.main,
  }
}))