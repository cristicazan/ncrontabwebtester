import React from 'react';
import { OccurrencesFormValues, OccurrencesForm } from "./OcurrencesForm";

export default function Occurrences() {
    const initialValues: OccurrencesFormValues = { startDate: new Date(), endDate: new Date(), includingSeconds: true, expression: '0 5 * * * *' };

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
            <OccurrencesForm
                initialValues={initialValues}
                onSubmit={generateClicked}
            />
        </div>
    );
}
