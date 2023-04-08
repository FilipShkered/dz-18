class ContactApi {
    static API = 'https://642ffaafc26d69edc88806d4.mockapi.io/api/contacts/'

    static getList() {
        return fetch(ContactApi.API)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }

                throw new Error('Can not retrive contact list from server');
            })
    }

    static create(contact) {
        return fetch(ContactApi.API, {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: {
                    'Content-type': 'application/json',
                }
            })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }

                throw new Error('Can not create contact on server');
            })
    }

    static delete(id) {
        return fetch(`${ContactApi.API}/${id}`, {
                method: 'DELETE',
            })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }

                throw new Error('Can not delete contact from server');
            })
    }

    static update(id, data) {
        return fetch(`${ContactApi.API}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Failed to update contact item on server');
            });
    }
}