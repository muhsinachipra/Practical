
const str = "aaagtatt";
console.log(longestRepeatingSequence(str)); // Output: "aaa"

const str2 = "abbkdddfd";
console.log(longestRepeatingSequence(str2)); // Output: "ddd"

const str3 = "shfffrhhhh";
console.log(longestRepeatingSequence(str3)); // Output: "hhhh"

function longestRepeatingSequence(str) {
    let maxVal = str[0]
    let maxLen = 1
    let curVal = str[0]
    let curLen = 1

    for (let i = 1; i < str.length; i++) {
        if (curVal === str[i]) {
            curLen++
        } else {
            curVal = str[i]
            curLen = 1
        }

        if (curLen > maxLen) {
            maxVal = curVal
            maxLen = curLen
        }
    }
    return maxVal.repeat(maxLen)
}