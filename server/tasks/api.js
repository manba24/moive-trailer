

const rp = require('request-promise-native')

async function fetchMovie(item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`

    const res = await rp(url)

    return res

};
(async () => {
    let movies = [{
        doubanId: 1292052,
        title: '肖申克的救赎',
        rate: 9.6,
        poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p480747492.jpg'
    },
    {
        doubanId: 1295644,
        title: '这个杀手不太冷',
        rate: 9.4,
        poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p511118051.jpg'
    }]

    movies.map(async movie => {
        let moiveData = await fetchMovie(movie)
        try {
            moiveData = JSON.parse(moiveData)
            console.log(moiveData.tags)     
            console.log(moiveData.summary)  

        } catch (err) {
            console.log(err)
        }
    })
})()