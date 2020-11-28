import React, { useState } from 'react';
import { OccurrencesFormValues, OccurrencesForm } from "./OcurrencesForm";
import moment from 'moment';
import { Console } from './Console';
import { APIService } from '../services/API.service';


export default function Occurrences() {
    const [occurences, setOccurrences] = useState(null);
    const initialValues: OccurrencesFormValues = { startDate: moment().toDate(), endDate: moment().add(1, 'days').toDate(), includingSeconds: true, expression: '0 5 * * * *' };

    const api = new APIService();

    async function generateClicked(formData: any) {
        api.getNextOccurrences(formData)
            .then(response => {
                if (response) {
                    setOccurrences(response.data);
                } else {
                    setOccurrences(null);
                }
            })
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
