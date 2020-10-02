import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from '@material-ui/core'
import useStyles from './styles'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

export default function NewPathButton(props) {
  const styles = useStyles()

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.closeDialog}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
      >
        <DialogTitle>{props.action}</DialogTitle>

        <DialogContent className={styles.dialogContent}>
          <Formik
            validateOnChange={true}
            initialValues={{
              title: '',
              description: '',
              marker: '',
            }}
            validationSchema={Yup.object({
              title: Yup.string()
                .max(20, 'Max 20 characters')
                .required('Required'),
              description: Yup.string().max(100, 'Max 100 characters')
            })}
            onSubmit={async (values, { setSubmitting }) => {
              props.onSubmit(values)
            }}
          >
            {({ errors, touched, isValid, isSubmitting }) => (
              <Form>
                <Field
                  name="title"
                  type="text"
                  as={TextField}
                  required={true}
                  variant="outlined"
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

                <Field
                  name="description"
                  multiline
                  rows={4}
                  as={TextField}
                  variant="outlined"
                  label="Description"
                  className={styles.input}
                  fullWidth={true}
                  helperText={
                    errors.description &&
                    touched.description &&
                    errors.description
                      ? errors.description
                      : ' '
                  }
                  error={
                    errors.description &&
                    touched.description &&
                    errors.description
                      ? true
                      : false
                  }
                />

                <FormControl variant="outlined" className={styles.formControl}>
                  <InputLabel id="markerId">Marker</InputLabel>
                  <Field
                    id="markerId"
                    name="marker"
                    type="select"
                    as={Select}
                    variant="outlined"
                    label="Marker"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {props.markers.map((m) => {
                      return (
                        <MenuItem key={m.id} value={m.id}>
                          {m.name}
                        </MenuItem>
                      )
                    })}
                  </Field>
                </FormControl>

                {/* <FormControl
                  variant="outlined"
                  className={styles.formControl}
                  error={
                    errors.marker && touched.marker && errors.marker
                      ? true
                      : false
                  }
                >
                  <InputLabel id="markerId">Marker *</InputLabel>
                  <Field
                    id="markerId"
                    name="marker"
                    type="select"
                    as={Select}
                    variant="outlined"
                    label="Marker *"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {props.markers.map((m) => {
                      return (
                        <MenuItem key={m.id} value={m.id}>
                          {m.name}
                        </MenuItem>
                      )
                    })}
                  </Field>
                  <FormHelperText>
                    {errors.marker && touched.marker && errors.marker
                      ? errors.marker
                      : ' '}
                  </FormHelperText>
                </FormControl> */}

                <DialogActions>
                  <Button
                    size="medium"
                    onClick={props.closeDialog}
                    color="primary"
                  >
                    Cancel
                  </Button>

                  <Button
                    variant="contained"
                    size="medium"
                    disabled={isSubmitting && !isValid}
                    color="secondary"
                    type="submit"
                  >
                    Save
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  )
}
