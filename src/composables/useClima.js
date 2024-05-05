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
            
            

        } catch (error) {
            console.log(error);
        }
        
        
        //obtener el clima
    }

    return{
        obtenerClima,
    };

}