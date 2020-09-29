import React from 'react'
import { Tooltip, Dialog, DialogContent, DialogTitle, IconButton, CardContent, Button, TextField, Card, Typography } from '@material-ui/core'
import { AddSharp } from '@material-ui/icons'
import useStyles from '../styles'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { MuiDialogTitle } from '@material-ui/core';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';


export default function NewPathButton(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = useStyles()

  return (
    <div>
      <Tooltip title="New path" arrow>
        <IconButton className={styles.iconButton} onClick={handleClickOpen}>
          <AddSharp className={styles.icon} />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>
          <Typography variant="h6">New path</Typography>
        </DialogTitle>

        <DialogContent>
          <Formik
            initialValues={{
              title: '',
              description: '',
            }}
            validationSchema={Yup.object({
              title: Yup.string()
                .max(20, 'Max 20 characters')
                .required('Required'),
              description: Yup.string()
                .max(100, 'Max 100 characters'),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              console.log(values)
            }}
          >
            {({ errors, touched, isValid, isSubmitting }) => (
              <Form>
                <Field
                  name="title"
                  type="text"
                  as={TextField}
                  required={true}
                  label="Title"
                  fullWidth={true}
                  helperText={
                    errors.title && touched.title && errors.title
                      ? errors.title
                      : ' '
                  }
                  error={
                    errors.title && touched.title && errors.title ? true : false
                  }
                />

                <Button onClick={handleClose} color="primary">
                  Cancel
                  </Button>

                <Button
                  variant="contained"
                  size="large"
                  disabled={isSubmitting && !isValid}
                  color="primary"
                  type="submit"
                >
                  Save
                  </Button>

              </Form>
            )}
          </Formik>

        </DialogContent>
      </Dialog>
    </div>
  )
}
