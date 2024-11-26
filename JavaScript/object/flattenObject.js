function flattenObject(obj, prefix = '', result = {}) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                // Recursively flatten nested objects
                flattenObject(obj[key], newKey, result);
            } else {
                // Assign non-object values directly
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

// Example usage
const nestedObject = {
    name: "John",
    address: {
        city: "New York",
        zip: {
            code: 10001,
            area: "NY"
        }
    },
    age: 30
};

const flattened = flattenObject(nestedObject);
console.log(flattened);
// Output:
// {
//   "name": "John",
//   "address.city": "New York",
//   "address.zip.code": 10001,
//   "address.zip.area": "NY",
//   "age": 30
// }
