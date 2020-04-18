// Dependency inversion principle

// class Fetch {
//     request(url) {
//         // return fetch(url).then(r => r.json())
//         return Promise.resolve('data from fetch')
//     }
// }
//
// class LocalStorage {
//     get() {
//         const dataFromLS = 'data from LocalStorage';
//         return dataFromLS;
//     }
// }
//
// class Database {
//     constructor() {
//         // this.fetch = new Fetch()
//         this.localStorage = new LocalStorage()
//     }
//     getData() {
//         // this.fetch.request('nba.com')
//         return this.localStorage.get('key')
//     }
// }
//
// const db = new Database()
//
// console.log(db.getData())

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLS = 'data from LocalStorage';
        return dataFromLS;
    }
}

class Database {
    constructor(client) {
        this.client = client
    }
    getData(param) {
        return this.client.clientGet(param)
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet(param) {
        return this.fetch.request(param)
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet(param) {
        this.localStorage.get(param)
    }
}

// const db = new Database(new FetchClient())
const db = new Database(new LocalStorageClient())

console.log(db.getData('nba.com'))