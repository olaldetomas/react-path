import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 250,
    height: 210,
    margin: 10,
    backgroundColor: theme.palette.cardPath.main,
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
    height: 19,
    width: 19,
    borderRadius: 17,
    backgroundColor: theme.palette.cardPath.main,
  },
  lineDivider: {
    display: 'flex',
    height: 24,
    width: 3,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 2,
    backgroundColor: theme.palette.timeline.main,
  },
  cardPathDescription: {
    minHeight: 110,
    minWidth: 180,
    maxHeight: 110,
    maxWidth: 180,
    backgroundColor: theme.palette.cardPath.main,
    overflow: 'auto',
    wordWrap: 'break-word',
  },
  cardPathContent: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 0,
    color: theme.palette.timeline.main,
  },
  cardActions: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  iconButton: {
    color: theme.palette.timeline.main,
  },
}))
