const calculateMass = (arr) => {
    return arr.reduce((sum, current) => {
        return sum + current.length;
    }, 0);
};

console.log(calculateMass(['dog', 'donkey', 'cat']));