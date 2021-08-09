import axios from 'axios';
import { apiKey } from './env'

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
        tag: 'cats'
    }
}
)

// giphyApi.get('/random')
//     .then(
//         resp => {
//             const { data } = resp.data
//             const { url } = data.images.original

//             const img = document.createElement('img')
//             img.src = url
//             document.body.append(img)
//         }
//     )


export default giphyApi






