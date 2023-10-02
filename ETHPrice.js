export const fetchData = async (url) => {
    const response = await fetch(url);
    const data =await response.json();
    return parseFloat(data.data.coin.price).toFixed(3); 
}