import axios from "axios";

const BASE_URL= "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODk1ZDYwNzE4OGY5N2VjZjI0NTc5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzA4OTA0NiwiZXhwIjoxNjg3MzQ4MjQ2fQ.6zYZuDKGUQ2_eahnlZIPtzyBvDet56q8zP-YCH-4nKA"

export const publicRequest= axios.create({
    baseURL:BASE_URL,
});

export const userRequest= axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});