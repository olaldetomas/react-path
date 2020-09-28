import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardPathStyles from './styles'
import { Typography, CardActions, IconButton, Tooltip } from '@material-ui/core'
import { Edit, StarBorder } from '@material-ui/icons'

export default function CardPath(props) {
  const classes = CardPathStyles()

  return (
    <div>
      <Card elevation={2} className={classes.root}>
        <div className={classes.timeLine}>
          <div className={classes.bolita}>
            <div className={classes.centerBolita}></div>
          </div>
          <div
            className={classes.lineDivider}
            style={{ marginBottom: 3, marginTop: 3 }}
          ></div>
          <div
            className={classes.lineDivider}
            style={{ marginBottom: 3 }}
          ></div>
          <div className={classes.bolita}>
            <div className={classes.centerBolita}></div>
          </div>
          <div
            className={classes.lineDivider}
            style={{ marginBottom: 3, marginTop: 3 }}
          ></div>
          <div
            className={classes.lineDivider}
            style={{ marginBottom: 3 }}
          ></div>
          <div className={classes.bolita}>
            <div className={classes.centerBolita}></div>
          </div>
        </div>
        <CardContent className={classes.cardPathContent}>
          <Typography variant="h6">{props.path.title}</Typography>

          <div className={classes.cardPathDescription}>
            {props.path.description}
          </div>
          <CardActions className={classes.cardActions}>
            
            <Tooltip title="Favourite" arrow>
              <IconButton size="small" onClick={props.onFav}>
                <StarBorder className={classes.iconButton} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Edit" arrow onClick={props.onEdit}>
              <IconButton size="small">
                <Edit className={classes.iconButton} />
              </IconButton>
            </Tooltip>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  )
}
