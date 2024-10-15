const MNAGA_URL ='https://api.jikan.moe/v4/manga?limit=25';


// export async function getManga(page){

//     try{
//         const data=await fetch(MNAGA_URL+'&'+{page})
//         if(!data.ok){
//             throw new Error('no response')
//         }
//          return  data.json()

//     }catch(e){
//         console.log(e.message);
//     }

// }