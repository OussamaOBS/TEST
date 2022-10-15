export const repeat = (n) => Array.from(Array(n).keys());

export function getMultiSelected(target) {
    return Array.from(target.options).reduce((acc, {selected, value}) => {
        if (selected) {
            acc.push(value)
        }
        return acc;
    }, [])
}

export function generateId() {
    return Date.now();
}
