export default function useClima(){
    
   const obtenerClima=({ ciudad, pais})=>{
       //importar apikey
       const key =import.meta.env.VITE_API_KEY;
       //obtener la lat, lngt
       const ur =`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}
                   &limit=1&appid=${key}`;
       
       //obtener el clima
   }

   return{
       obtenerClima,
   };

}