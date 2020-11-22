import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import * as yup from 'yup';
import { Formik } from "formik";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export interface TestFormValues {
    startDate: null | Date,
    endDate: null | Date,
    includingSeconds: boolean,
    expression: string
}

const testFormSchema = yup.object({
    startDate: yup.date().required("Start date is required"),
    endDate: yup.date().required("End date is required"),
    includingSeconds: yup.boolean(),
    expression: yup.string().required("Expression is required"),
})

interface TestFormProps {
    onSubmit?: any,
    initialValues?: TestFormValues
}

export const TestForm: React.FunctionComponent<TestFormProps> = ({
    initialValues,
    onSubmit
}: TestFormProps) => {
    const handleSubmit = async (evt: any) => {
        const isValid = await testFormSchema.validate(evt);
        if (!isValid) {
            return;
        }

        onSubmit(evt);
    };
    return (
        <>
            <Formik
                validationSchema={testFormSchema}
                onSubmit={handleSubmit}
                initialValues={initialValues as any}
            >
                {({
                    handleSubmit,
                    handleChange,
                    touched,
                    errors,
                    values,
                    setFieldValue
                }: any) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row}>
                                <Col xs="2">
                                    <DatePicker
                                        placeholderText="Start date"
                                        name="startDate"
                                        selected={values.startDate}
                                        onChange={val => {
                                            setFieldValue('startDate', val);
                                        }}
                                    />
                                </Col>

                                <Col xs={{ span: 2, offset: 1 }}>
                                    <DatePicker
                                        placeholderText="End date"
                                        name="endDate"
                                        selected={values.endDate}
                                        onChange={val => {
                                            setFieldValue('endDate', val);
                                        }}
                                    />
                                </Col>

                            </Form.Group>

                            <Form.Group as={Row}>

                                <Col xs="3">
                                    <Form.Control
                                        placeholder="Expression"
                                        name="expression"
                                        value={values.expression}
                                        onChange={handleChange}
                                        isInvalid={touched.expression && errors.expression}
                                    />
                                </Col>

                                <Col xs="3">
                                    <Form.Check
                                        type="switch"
                                        id="switch"
                                        name="includingSeconds"
                                        label="Include seconds"
                                        onChange={handleChange}
                                        checked={values.includingSeconds}
                                    />
                                </Col>

                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col xs="4">
                                    <Button variant="primary" type="submit">Test</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    );
                }
                }

            </Formik>
        </>
    );

}