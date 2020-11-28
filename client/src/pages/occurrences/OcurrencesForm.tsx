import React from 'react';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import * as yup from 'yup';
import { Formik } from "formik";
import DateFnsUtils from '@date-io/date-fns';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Button, FormControlLabel, FormGroup, Grid, Switch, TextField } from '@material-ui/core';

export interface OccurrencesFormValues {
    startDate: null | Date,
    endDate: null | Date,
    includingSeconds: null | boolean,
    expression: string
}

const testFormSchema = yup.object({
    startDate: yup.date().required("Start date is required"),
    endDate: yup.date().required("End date is required"),
    includingSeconds: yup.boolean(),
    expression: yup.string().required("Expression is required"),
})

interface OccurrencesFormProps {
    onSubmit?: any,
    initialValues?: OccurrencesFormValues
}

export const OccurrencesForm: React.FunctionComponent<OccurrencesFormProps> = ({
    initialValues,
    onSubmit
}: OccurrencesFormProps) => {
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
                    errors,
                    values,
                    setFieldValue
                }: any) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <FormGroup row>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            label="Expression"
                                            name="expression"
                                            value={values.expression}
                                            onChange={handleChange}
                                            error={Boolean(errors.expression)}
                                            helperText={errors.expression}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    onChange={handleChange}
                                                    checked={values.includingSeconds}
                                                    name="includingSeconds"
                                                    color="primary"
                                                />
                                            }
                                            label="Include seconds"
                                        />
                                    </Grid>
                                </Grid>
                            </FormGroup>

                            <FormGroup row>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <KeyboardDateTimePicker
                                                name="startDate"
                                                value={values.startDate}
                                                onChange={val => {
                                                    setFieldValue('startDate', val);
                                                }}
                                                openTo="date"
                                                format="dd/MM/yyyy HH:mm"
                                                label="Start datetime"
                                                views={["year", "month", "date"]}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <KeyboardDateTimePicker
                                                name="endDate"
                                                value={values.endDate}
                                                onChange={val => {
                                                    setFieldValue('endDate', val);
                                                }}
                                                openTo="date"
                                                format="dd/MM/yyyy HH:mm"
                                                label="End datetime"
                                                views={["year", "month", "date"]}
                                            />
                                        </Grid>
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </FormGroup>

                            <FormGroup row>
                                <Grid item xs={4} style={{ paddingTop: '10px' }}>
                                    <Button variant="outlined" color="primary" type="submit">Generate</Button>
                                </Grid>
                            </FormGroup>

                        </form>
                    );
                }
                }

            </Formik>
        </>
    );

}