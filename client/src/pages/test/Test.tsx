import React from 'react';
import { TestFormValues, TestForm } from "./TestForm";

export default function Test() {
    const initialValues: TestFormValues = { startDate: new Date(), endDate: new Date(), includingSeconds: true, expression: '* * * * * *' };

    async function generateClicked(formData: any) {
        const url = process.env.REACT_APP_API_URL + '/getnextoccurrences'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then((response) => { console.log(response); })
    }

    return (
        <div>
            <TestForm
                initialValues={initialValues}
                onSubmit={generateClicked}
            />
        </div>
    );
}
