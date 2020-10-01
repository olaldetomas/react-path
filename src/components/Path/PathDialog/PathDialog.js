import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
        <DialogTitle>
          {props.action}
        </DialogTitle>

        <DialogContent className={styles.dialogContent}>
          <Formik
            initialValues={{
              title: '',
              description: '',
            }}
            validationSchema={Yup.object({
              title: Yup.string()
                .max(20, 'Max 20 characters')
                .required('Required'),
              description: Yup.string().max(100, 'Max 100 characters'),
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
                  <InputLabel id="demo-simple-select-outlined-label">
                    Marker
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <DialogActions>
                  <Button size="medium" onClick={props.closeDialog} color="primary">
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
