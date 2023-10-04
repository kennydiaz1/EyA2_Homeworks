export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7wDApwhPSatueozynfakcRC6pOm5X4bm&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url)
    const {data} = await resp.json();
    const gifs = data.map( (gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    return gifs;
}