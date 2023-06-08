const groupingString = (string) => {
    let groupedString = string.split("").reduce((carry, current) => {

        if (!carry.groupBy) {
            carry.result.push(current)
            carry.groupBy = current
        } else if (current.length == 1 && current != carry.groupBy) {
            carry.result.push(current)
            carry.groupBy = current
        } else {
            carry.result.push(carry.result[carry.result.length - 1])
            carry.result[carry.result.length - 1] += current
        }

        return carry

    }, { result: [], groupBy: "" })

    const result = groupedString.result.map(e => {
        return (e.charCodeAt(0) - 96) * e.length
    })

    return result
}

exports.weightedStrings = (string = "", queries = []) => {
    let groupedString = groupingString(string)

    let result = queries.map(q => {
        return groupedString.some(s => s == q) ? "Yes" : "No"
    })

    return { result }
} 