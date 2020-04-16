let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

////////////////


let user = {
    name: "John",
    money: 1000,

    // для хинта равного "string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // для хинта равного "number" или "default"
    valueOf() {
        return this.money;
    }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500