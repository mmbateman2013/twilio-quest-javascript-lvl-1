const scan = (data) => {
    let index = 0;
    let indices = [];
    data.forEach(element => {
        if (element === 'contraband') {
            indices.push(index);
        }
        index++;
    });
    return indices;
};