import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifySelf: 'flex-end',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1000,
  },
  button: {
    borderRadius: 100,
    display: 'flex'
  },
  
}))

const PathButtonActions = (props) => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <div className={styles.buttonDiv}>
        <Button
          color="secondary"
          className={styles.button}
          onClick={props.onClickCancel}
        >
          {props.cancelLabel}
        </Button>
        <Button
          color="primary"
          className={styles.button}
          onClick={props.onClickSuccess}
        >
          {props.successLabel}
        </Button>
      </div>
    </div>
  )
}

export default PathButtonActions
