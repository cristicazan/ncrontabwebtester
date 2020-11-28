import React, { useState } from 'react';
import { OccurrencesFormValues, OccurrencesForm } from "./OcurrencesForm";
import moment from 'moment';
import { Console } from './Console';


export default function Occurrences() {
    const [occurences, setOccurrences] = useState(null);

    const initialValues: OccurrencesFormValues = { startDate: moment().toDate(), endDate: moment().add(1, 'days').toDate(), includingSeconds: true, expression: '0 5 * * * *' };

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
            .then((response) => { setOccurrences(response); })
    }

    return (
        <div>
            <OccurrencesForm
                initialValues={initialValues}
                onSubmit={generateClicked}
            />
            <Console occurrences={occurences} />
        </div >
    );
}
