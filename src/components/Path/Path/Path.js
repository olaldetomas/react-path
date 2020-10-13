import React, { useState } from 'react'
import { Container, Card, Typography, IconButton } from '@material-ui/core'
import { AddSharp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import PathButtonActions from '../PathButtonActions'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100vh',
    maxWidth: 'none',
    flexDirection: 'column',
  },
  cardTitle: {
    height: 50,
    backgroundColor: theme.palette.cardPath.main,
    marginTop: 20,
    borderRadius: 50,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
  },
  titleText: {
    color: theme.palette.timeline.main,
    display: 'flex',
    alignSelf: 'center',
    marginLeft: 12,
    marginRight: 12,
  },
  line: {
    display: 'flex',
    alignSelf: 'center',
    height: 25,
    width: 5,
    marginTop: 7,
    marginBottom: 4,
    borderRadius: 2,
    backgroundColor: theme.palette.timeline.main,
  },
  iconButton: {
    display: 'flex',
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  icon: {
    color: theme.palette.timeline.main,
    fontSize: 30,
  },
}))

function Path(props) {
  const styles = useStyles()
  const [path, setPath] = useState(props.path)

  const onClickSuccess = () => {
    console.log('save')
  }

  const onClickCancel = () => {
    console.log('cancel')
  }

  return (
    <Container className={styles.container}>
      <Card elevation={4} className={styles.cardTitle}>
        <Typography variant="h6" className={styles.titleText}>
          Curso React.js
        </Typography>
      </Card>
      <div className={styles.line}></div>
      <IconButton className={styles.iconButton}>
        <AddSharp className={styles.icon} />
      </IconButton>

      <PathButtonActions
        onClickCancel={onClickCancel}
        onClickSuccess={onClickSuccess}
        cancelLabel='Cancel'
        successLabel='Save'
      />
    </Container>
  )
}

export default Path
