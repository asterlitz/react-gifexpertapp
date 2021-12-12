
export const getGif = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VRXV2D2n78slHCshX3sadHEnXX7AbDSZ&q=${encodeURI(category)}&limit=7`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( (img) => {
        return {
            id: img.id,
            url: img.images.downsized_medium.url,
            title: img.title
        }
    });
    return gifs;
}