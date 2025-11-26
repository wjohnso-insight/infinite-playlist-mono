export function unique<T>(arr: T[]): T[] {
    let newArr: T[] = [] // New array to return
    let seenKeys: string[] = [] // Tracker array for seen items, using stringified item for key
    for (const item of arr) {
        let key: string
        const valueType = typeof item // Get typeof item to check if an object
        if (valueType == "object") { // If object, stringify using JSON.stringify
            key = `${JSON.stringify(item)}`
        } else {
            key = `${String(item)}` // Else, stringify using String
        }
        if (!seenKeys.includes(key)) { // Add to new array if new and add key to keys array, else move on
            seenKeys.push(key)
            newArr.push(item)
        }
    }
    return newArr
}
