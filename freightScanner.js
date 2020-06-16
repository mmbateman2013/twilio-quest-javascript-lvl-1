const scan = (data) => {
    let count = 0;
    data.forEach(element => {
        if (element === 'contraband') {
            count++;
        }
    });
    return count;
};