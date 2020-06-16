const scanAndFilter = (data, term) => {
    return data.filter(element => {
        return element !== term
    });
}