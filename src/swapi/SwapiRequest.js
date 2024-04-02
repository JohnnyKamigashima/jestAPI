const swapiUrl = "https://swapi.dev/api";
const swapiPeopleUrl = `${swapiUrl}/people`;

class SwapiRequest {
    async getPeople() {
        return fetch(swapiPeopleUrl)
            .then((res) => res.json())
            .then((data) => {
                return data.results
            })
    }

    async getPerson(id) {
        return fetch(`${swapiPeopleUrl}/${id}`)
            .then((res) => res)
    }
}

module.exports = SwapiRequest;