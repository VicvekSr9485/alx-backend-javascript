function calculateNumber (type, a, b) {
    if (typeof  type !== 'string') throw new TypeError('type must be a string');
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    switch (type.toUpperCase()) {
        case 'SUM':
            return roundedA + roundedB;
        case 'SUBTRACT':
            return roundedA - roundedB;
        case 'DIVIDE':
            if (roundedB === 0) return 'Error';
            return roundedA / roundedB;
        default:
            throw new Error(`Invalid type: ${type}`);
    }
}

module.exports = calculateNumber;
