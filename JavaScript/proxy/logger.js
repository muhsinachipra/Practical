const logger = new Proxy({}, {
    get(target, property) {
        console.log(`Property '${property}' accessed.`);
        return target[property];
    },
    set(target, property, value) {
        console.log(`Property '${property}' set to ${value}.`);
        target[property] = value;
        return true;
    }
});

logger.name = "Muhsin"; // Logs: Property 'name' set to Muhsin
console.log(logger.name); // Logs: Property 'name' accessed
