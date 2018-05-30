const nanoid = require('nanoid');
const uploadToQiniu = function(info,url){

}

;(async ()=>{
    const movies = [
        { 
            doubanId: 26739551,
            video: 'http://vt1.doubanio.com/201805301504/20d12725de48bb02934fd6cf319ca01d/view/movie/M/302190491.mp4',
            cover: 'https://img1.doubanio.com/img/trailer/medium/2493603388.jpg?',
            poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p480747492.jpg' 
        }
    ]

    movies.map(async movie=>{
        if(movie.video && !movie.key){
            // try{
            //     let videoData = await uploadToQiniu(movie.video,nanoid()+'.mp4')

            //     let coverData = await uploadToQiniu(movie.cover,nanoid()+'.mp4')
            //     let posterData = await uploadToQiniu(movie.poster,nanoid()+'.mp4')
            // }
        }
    })
})