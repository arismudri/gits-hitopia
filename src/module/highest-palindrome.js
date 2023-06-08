const checkIsNumber = (array = [], index = 0) => {
    const lengthArray = array.length
    const item = array[index]

    if (index > lengthArray - 1) return true

    if (typeof item === "number" || (typeof item === "string" && !isNaN(item))) {
        return checkIsNumber(array, index + 1)
    } else {
        return false
    }
}

const checkWasPalindrom = (left = [], right = [], index = 0) => {
    const lengthArray = left.length

    if (index > lengthArray - 1) {
        return true
    }

    if (left[index] === right[index]) {
        return checkWasPalindrom(left, right, index + 1)
    } else {
        return false
    }
}

const reverseArray = (array = [], index = 0, newArray = []) => {
    let i;

    if (index == 0 && newArray.length == 0) {
        i = array.length - 1
    } else {
        i = index
    }

    newArray.push(array[i])

    if (newArray.length == array.length) return newArray

    return reverseArray(array, i - 1, newArray)
}

const mapArray = (array = [], callback = (e) => e, index = 0, carry = []) => {
    if (index > array.length - 1) return carry

    carry.push(callback(array[index]))

    return mapArray(array, callback, index + 1, carry)
}

const replacerArrayElement = (array = [], callback = (e) => e, rightSideReversed = [], replaced = 0, index = 0, carry = []) => {
    if (index > array.length - 1) return carry

    carry.push(callback(array[index], index))

    return replacerArrayElement(array, callback, rightSideReversed, replaced, index + 1, carry)
}

const palindrom = (string, k) => {

    const splitted = string.split("")

    let isNumber = checkIsNumber(splitted)

    if (!isNumber) return -1

    const halfLength = (splitted.length / 2) - 1
    const isFloat = halfLength % 1 !== 0;
    const halfLengthLeft = isFloat ? halfLength - 0.5 : halfLength
    const halfLengthRight = isFloat ? halfLength + 0.5 : halfLength

    const leftSide = splitted.slice(0, halfLengthLeft + 1)
    const rightSide = splitted.slice(halfLengthRight + 1, splitted.length)
    const rightSideReversed = reverseArray(rightSide)

    let wasPalindrom = checkWasPalindrom(leftSide, rightSideReversed)

    if (wasPalindrom) {
        if (isFloat) return leftSide.join("") + splitted[halfLengthRight] + reverseArray(rightSideReversed).join("")

        return leftSide.join("") + reverseArray(rightSideReversed).join("")
    }

    let replaced = 0

    const makePalindrom = replacerArrayElement(leftSide, (item, index) => {
        if (item !== rightSideReversed[index] && replaced < k) {
            const replacer = item > rightSideReversed[index] ? item : rightSideReversed[index]
            item = replacer
            rightSideReversed[index] = replacer
            replaced++
        }
        return { left: item, right: rightSideReversed[index] }
    }, rightSideReversed, replaced)

    const buildLeft = mapArray(makePalindrom, e => {
        return e.left
    }).join("")

    const buildRight = mapArray(makePalindrom, e => {
        return e.right
    })

    const reversedBuildRight = reverseArray(buildRight).join("")

    if (isFloat) return buildLeft + splitted[halfLengthRight] + reversedBuildRight

    return buildLeft + reversedBuildRight

}

exports.highestPalindrom = (string, key) => {

    const result = palindrom(string, key)

    return { result }
}
