const user = {
    age: 25
};

const userProxy = new Proxy(user, {
    set(target, property, value) {
        if (property === 'age' && (typeof value !== 'number' || value < 0)) {
            throw new Error('Age must be a positive number.');
        }
        target[property] = value;
        return true;
    }
});

userProxy.age = 30; // Works fine
userProxy.age = -5; // Throws error
