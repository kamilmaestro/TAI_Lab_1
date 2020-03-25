const API_URL = 'https://quiztai.herokuapp.com/api/quiz';

async function fetchData() {
    try {
        const data = await fetch(API_URL);
        return await data.json();
    } catch (error) {
        console.log(error);
    }
}