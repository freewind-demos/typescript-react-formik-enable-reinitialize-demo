import {Formik, FormikProps} from 'formik';
import React, {useState} from 'react'

type LoginProps = {
  username: string,
}

export default function MyForm() {
  const [initialValues, setInitialValues] = useState<LoginProps>({
    username: 'aaa',
  });

  setTimeout(() => {
    console.log("### initialValues is changed to", initialValues);
    setInitialValues({
      username: 'new-value'
    })
  }, 1000)

  return <div>
    <h1>Hello Formik</h1>
    <Formik initialValues={initialValues}
            onSubmit={() => undefined}
            enableReinitialize // !!!
            render={(formikProps: FormikProps<LoginProps>) => {
              console.log("### render form")
              return <div>{JSON.stringify(formikProps.values)}</div>
            }}
    />
  </div>
};
