import axios from "axios"

const fetchData = async (url:string)=>{
    try{
        const data = await axios.get(url).then(res => res.data)
        return data
    }catch(error){
       console.error(error)
    }

}

export default fetchData