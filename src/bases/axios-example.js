import axios from 'axios';

const apiKey = 'your_giphy_api_key_here'

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
        tag: 'cats'
    }
}
)


giphyApi.get('/random')
    .then(
        resp => {
            const { data } = resp.data
            const { url } = data.images.original

            const img = document.createElement('img')
            img.src = url
            document.body.append(img)
        }
    )








