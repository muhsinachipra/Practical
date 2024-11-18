const secureObject = new Proxy({}, {
    get(target, property) {
        if (property === 'password') {
            throw new Error('Access denied!');
        }
        return target[property];
    }
});

secureObject.username = 'muhsin';
console.log(secureObject.username); // Logs: muhsin
console.log(secureObject.password); // Throws Error: Access denied!
