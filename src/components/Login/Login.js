import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Button, TextField } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: 10,
      width: 300,
      height: 335,
      padding: 30,
    },
  },
  loginWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100vh',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginInputs: {
    marginTop: 5,
  },
  titleForm: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 25,
    fontFamily: ['Libre Baskerville', 'serif'],
    opacity: 0.5,
  },
  button: {
    marginTop: 5,
  },
  googleBotton: {
    marginTop: 25,
  },
}))

export default function Login(props) {
  const classes = useStyles()

  return (
    <div className={classes.loginWrapper}>
      <div className={classes.root}>
        <Card className={classes.card} elevation={10}>
          <Typography
            align="center"
            className={classes.titleForm}
            variant="h5"
            gutterBottom
            color="primary"
          >
            "/path"
          </Typography>

          <Formik
            initialValues={{
              email: props.email,
              password: props.password
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
              password: Yup.string()
                .required('Required')
                .min(6, 'At less 6 characters'),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              props.onSubmit(values)
            }}
          >
            {({ errors, touched, isValid, isSubmitting }) => (
              <Form>
                <Field
                  name="email"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  required={true}
                  label="Email"
                  fullWidth={true}
                  helperText={
                    errors.email && touched.email && errors.email
                      ? errors.email
                      : ' '
                  }
                  error={errors.email && touched.email && errors.email
                    ? true
                    : false}
                />

                <Field
                  name="password"
                  type="password"
                  className={classes.loginInputs}
                  as={TextField}
                  variant="outlined"
                  required={true}
                  label="password"
                  fullWidth={true}
                  helperText={
                    errors.password && touched.password && errors.password
                      ? errors.password
                      : ' '
                  }
                  error={errors.password && touched.password && errors.password
                    ? true
                    : false}
                />

                <Button
                  fullWidth={true}
                  className={classes.button}
                  variant="contained"
                  size="large"
                  disabled={isSubmitting && !isValid}
                  color="primary"
                  type="submit"
                >
                  Sing in
                </Button>

                <Button
                  fullWidth={true}
                  className={classes.googleBotton}
                  variant="contained"
                  size="large"
                  color="secondary"
                  type="submit"
                >
                  Google
                </Button>
              </Form>
            )}
          </Formik>
        </Card>
      </div>
    </div>
  )
}
