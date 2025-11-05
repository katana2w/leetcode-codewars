class Connection {
    constructor(
        public ipSrc: string, // вообще тут private говорю, но геттеры сеттеры долго писать. Можем обойтись? Сказал да, я понимаю что ты их умеешь писать, давай для интервью обойдемся
        public port: number,
        public protocol: string,
    ){}
}

class Target {
    constructor(public ip: string) {}
}

interface IStrategy {
    delegate(connection: Connection): Target;
}

class RoundRobin implements IStrategy {
    currentTarget = 0;
    constructor(private targets: Target[]){}

    delegate(connection: Connection) {
        const target = this.targets[this.currentTarget];
        this.currentTarget = (this.currentTarget + 1) % this.targets.length;
    }
    // updateConfig() // out of scope, но тоже можно добавить.
}

class IPHash implements IStrategy {
    constructor(private targets: Target[]){}
    hashFunction(ip: string) { // Он удивился что в TS нет встроенной хеш функции предложил ваще какую-то простенькую написать
        return ip.split('.').reduce((acc, ip) => {
            return acc + parseInt(ip);
        }, 0)
    }

    delegate(connection: Connection){
        const hash = this.hashFunction(connection.ip);
        return this.targets[hash % this.targets.length]
    }
}

const targets = [
    new Target('192.168.1.1'),
    new Target('192.168.1.2'),
    new Target('192.168.1.3'),
    new Target('192.168.1.4'),
];
const roundRobin = new RoundRobin(targets);

for () { // ...
    assert(...);
}
//

const ipHash = new IPHash(targets);
const connection = new Connection('192.168.1.4');
let prevHash = ipHash.delegate(connection);
for () { // ...
    const currentHash = ipHash.delegate(connection);

    assert(prevHash === ipHash);
}
