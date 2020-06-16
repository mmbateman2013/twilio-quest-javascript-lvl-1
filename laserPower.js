const calculatePower = (data) => {
    return data.reduce((sum, current) => {
        return sum + current * 2;
    }, 0);
};