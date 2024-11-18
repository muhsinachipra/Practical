const virtualObj = new Proxy({}, {
    get(target, property) {
        return `Property ${property} dynamically generated`;
    }
});

console.log(virtualObj.anything); // Logs: Property anything dynamically generated
