// import SwapiRequest from "../../src/swapi/SwapiRequest";
const SwapiRequest = require('../../src/swapi/SwapiRequest');
const swapiRequest = new SwapiRequest();

test('Teste de requisição à API SWAPI', async () => {
    const response = await swapiRequest.getPerson(1);
    const responseData = await response.json();
    console.log(responseData.name);

    expect(response.status).toBe(200);
    expect(responseData.name).toBe('Luke Skywalker');
    expect(responseData.gender).toBe('male');
    // Adicione mais expectativas conforme necessário
});