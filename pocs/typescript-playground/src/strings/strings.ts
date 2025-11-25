export function updateTarget(input: string, target: string, update: string): string {
    return input.replace(target, update)
}

export function toTitleCase(input: string): string {
    if (input != "") {
        let str2 = input.charAt(0).toUpperCase() + input.slice(1) // Capitalize first letter
        for (let i = 1; i < str2.length; ++i) { 
            if (str2.charAt(i) == " ") { // Find first whitespace char
                str2 = str2.slice(0, i + 1) + str2.charAt(i + 1).toUpperCase() + str2.slice(i + 2) // Slice existing, capitalize char after whitespace, add rest of string
            }
        }
        return str2
    }
    return input
}

export function isPalindrome(input: string): boolean {
    input = input.toLowerCase().replace(/[^a-z]/gi, "") // Convert to lowercase and remove anything that isn't a letter
    let j = input.length - 1; // Get index of last char in input
    if (input != "") { // Check for empty string
        for (let i = 0; i < input.length; ++i) {
            if (input[i] != input[j - i]) {
                return false
            }
        }
        return true
    }
    return true
}