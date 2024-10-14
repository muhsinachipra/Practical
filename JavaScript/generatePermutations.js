function generatePermutations(str) {
    const permutations = [];

    function permute(current, remaining) {
        if (remaining.length === 0) {
            permutations.push(current)
        } else {
            for (let i = 0; i < remaining.length; i++) {
                let next = current + remaining[i]
                let rest = remaining.slice(0, i) + remaining.slice(i + 1)
                permute(next, rest)
            }
        }
    }

    permute('', str);
    return permutations;
}

// Example usage:
const inputString = 'abc';
const permutations = generatePermutations(inputString);

console.log('Permutations:', permutations);
// Output: [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
