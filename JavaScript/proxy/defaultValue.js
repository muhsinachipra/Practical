const defaults = new Proxy({}, {
    get(target, property) {
        return property in target ? target[property] : 'Default Value';
    }
});

console.log(defaults.name); // Logs: Default Value
defaults.name = 'Muhsin';
console.log(defaults.name); // Logs: Muhsin
