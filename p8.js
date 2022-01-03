function swap(a, b) {
    [b] = [a]
    [a] = [b]
    return [b, a]
}

console.log(swap(4, 7))