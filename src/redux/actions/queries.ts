export const getSearchQueries = (value:string,page:number) => {
    const perPage = 20;
    const queryString = `q=${value}&page=${page}&per_page=${perPage}`;
    return `https://api.github.com/search/repositories?${queryString}`;
}