import giphyApi from './bases/axios-example'

const getRandomGif = async () => {

    try {

        const { data } = (await giphyApi.get('/random')).data
        const { url } = data.images.original
        
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)

    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

getRandomGif()
