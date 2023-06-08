const cleanBracket = (string) => {

    const bracketCouples = ["()", "{}", "[]"]

    const brackets = ["(", ")", "{", "}", "[", "]"]

    let cleanString = string

    string.split("").forEach(character => {
        if (!brackets.includes(character)) {
            cleanString = cleanString.replaceAll(character, "")
        }
    })

    let result = cleanString

    bracketCouples.forEach(bracket => {
        if (cleanString.includes(bracket)) {
            result = cleanBracket(result.replaceAll(bracket, ""))
        }
    });

    return result
}

exports.balancedBracket = (param) => {

    const result = cleanBracket(param) == "" ? "Yes" : "No"

    return { result }
}
