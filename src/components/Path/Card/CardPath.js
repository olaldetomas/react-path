import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardPathStyles from '../styles'
import { Typography, CardActions, IconButton, Tooltip, Icon, } from '@material-ui/core'
import {
  Edit,
  StarBorder,
  Star,
  BookmarkBorder,
  Bookmark,
} from '@material-ui/icons'

export default function CardPath(props) {
  const classes = CardPathStyles()

  let isFavourite = props.path.favourite

  const favouriteButton = () => {
    if (isFavourite) {
      return (
        <Star
          style={{ color: '#fdd835', opacity: 0.8 }}
          className={classes.iconButton}
        />
      )
    } else {
      return <StarBorder className={classes.iconButton} />
    }
  }

  const markerkButton = () => {
    const marker = props.path.marker ? props.path.marker : null

    if (marker) {
      return (
        <Tooltip title={marker.name} arrow>
          <Icon size="small">
            <Bookmark
              style={{ color: marker.color, opacity: 0.8 }}
              className={classes.iconButton}
            />
          </Icon>
        </Tooltip>
      )
    } else {
      return (
        <Tooltip title="Marker" arrow>
          <IconButton size="small" onClick={props.onBookmark}>
            <BookmarkBorder className={classes.iconButton} />
          </IconButton>
        </Tooltip>
      )
    }
  }

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

          <Typography variant="body2" className={classes.cardPathDescription}>
            {props.path.description}
          </Typography>

          <CardActions className={classes.cardActions}>
            {markerkButton()}
            <Tooltip title="Fav" arrow>
              <IconButton size="small" onClick={props.onFav}>
                {favouriteButton()}
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
