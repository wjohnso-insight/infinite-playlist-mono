export function unique<T>(arr: T[]): T[] {
    const newArr: T[] = []
    const seenKeys: string[] = []
    for (const item of arr) {
        let key: string
        const valueType = typeof item 
        if (valueType == "object") { 
            key = `${JSON.stringify(item)}`
        } else {
            key = `${String(item)}`
        }
        if (!seenKeys.includes(key)) { 
            seenKeys.push(key)
            newArr.push(item)
        }
    }
    return newArr
}
