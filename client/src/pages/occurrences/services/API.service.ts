import axios from "axios";
import { APIInstance } from "../../../api/API.instance";

export class APIService {
    public getNextOccurrences = async (formData: any) => {
        return await APIInstance.post('/getnextoccurrences', JSON.stringify(formData))
            .then(response => {
                return response;
            });
    }
}