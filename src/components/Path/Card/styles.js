import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    height: 90,
  },
  iconButton: {
    marginLeft: 20,
  },
  icon: {
    color: theme.palette.timeline.main,
    fontSize: 30,
  },
  dialogContent: {
    width: 350,
  },
  input: {
    marginTop: 5
  },
  formControl: {
    minWidth: '100%',
    marginBottom: 20,
    marginTop: 5

  },
  textField: {
    width: 250,
    marginLeft: 10,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.background.paper,
        borderRadius: 50,
        borderWidth: 2,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.background.paper,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.timeline.main,
      },
    },
  },
}))
