import axios from "axios";
export default function useClima(){
    
    const obtenerClima= async({ ciudad, pais})=>{
        //importar apikey
        const key =import.meta.env.VITE_API_KEY;
        try {
            //obtener la lat, lngt
            const url =`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}
            &limit=1&appid=${key}`;
            const { data} = await axios (url);
            const {lat,lon}=data[0];
            const urlClima=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            
            const dataClima= await axios(urlClima);
            const { data: resultado } = dataClima;
            console.log(resultado);




        } catch (error) {
            console.log(error);
        }
        
        
        //obtener el clima
    }

    return{
        obtenerClima,
    };

}