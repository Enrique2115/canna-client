import React,{useEffect,useState} from "react";
import { Progress } from 'antd';
import { Message } from "semantic-ui-react";
import { getaperturtime } from "../../config/votation";

export default function Time() {

  const [timeaperture, gettiemaperture] = useState({
      "code_time": "000000000000",
      "time_filter": 1
  });
  const [timetranscurre, gettimetranscurre] = useState(new Date())
  const [timeporcen, getporcen] = useState(0);

  function format_code_time(fechaactual) {
    return [
      parseInt(fechaactual.substring(0, 4)),
      parseInt(fechaactual.substring(4, 6)),
      parseInt(fechaactual.substring(6, 8)),
      parseInt(fechaactual.substring(8, 10)),
      parseInt(fechaactual.substring(10, 12)),
      0,
    ];
  }

  //0000 00 00 00 00

  const aperture = (codetime) => {
    const datosapeturearray = format_code_time(codetime);
    // capturamos la fecha de apertura
    const apertura = new Date(
      datosapeturearray[0],
      datosapeturearray[1] - 1,
      datosapeturearray[2],
      datosapeturearray[3],
      datosapeturearray[4],
      datosapeturearray[5]
    );
    return apertura
  }

  // se caulcula la diferencia entre dos tiempos y hace la trasformacion
  const suma_hors = (time, hors)=>{

    if (!(time instanceof Date)) {
      throw TypeError("Las fechas no cumplen don tel timpo de dato DATE");
    }

    // calcular los milisegundos : 1000 mls x 60 s = 60000 mls = 1 min
    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    // milisegundossegundos de diferencia
    time.setTime(time.getTime() + (hors * msecPerHour));
    return time;
  }

  // se caulcula la diferencia entre dos tiempos y hace la trasformacion
  const timetrascurre = (timeactual, timeaperture)=>{

    if (!(timeactual instanceof Date) || !(timeaperture instanceof Date)) {
      throw TypeError("Las fechas no cumplen don tel timpo de dato DATE");
    }

    let now = timeactual;
    let apert = timeaperture;
    // milisegundossegundos de diferencia
    let tiempotrascurrido = now.getTime() - apert.getTime();
    // extraer fecha, hora, minutos y dias trascurridos
    // asignar el valor de las unidades en milisegundos
    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    var msecPerDay = msecPerHour * 24;

    // Calcular cuentos días contiene el intervalo. Substraer cuantos días
    //tiene el intervalo para determinar el sobrante
    var days = Math.floor(tiempotrascurrido / msecPerDay);
    tiempotrascurrido = tiempotrascurrido - days * msecPerDay;

    // Calcular las horas , minutos y segundos
    var hours = Math.floor(tiempotrascurrido / msecPerHour);
    tiempotrascurrido = tiempotrascurrido - hours * msecPerHour;

    var minutes = Math.floor(tiempotrascurrido / msecPerMinute);
    tiempotrascurrido = tiempotrascurrido - minutes * msecPerMinute;

    var seconds = Math.floor(tiempotrascurrido / 1000);

    return {days,hours,minutes,seconds};
  }

  const tick = () => {
    let now = new Date();
    let apert = (timeaperture.code_time !== "000000000000")?aperture(timeaperture.code_time):new Date();
    //const {days,hours,minutes,seconds} = timetrascurre(now,apert);
    
    
    const limittime = suma_hors(apert,timeaperture.time_filter);
    const {days,hours,minutes,seconds} = timetrascurre(limittime,now); // captura el tiempo faltante
    const transcurrent = new Date(0,0,days,hours,minutes,seconds,0) // captura la fecha trascurrida
    gettimetranscurre(transcurrent);
    // capturamos las horas trascurridas
    let horastrascurridas = resta_dos_fechas_a_hora(aperture(timeaperture.code_time),new Date());
    // este metodo se esta reciclando para uzar la hora trascurrida
    getporcen(horastrascurridas);
  }

  // HORAS TRASCURRIDAS
  const resta_dos_fechas_a_hora = (fecha1, fecha2) => {
    // fecha 1 : fecha de apertura
    // fecha 2 : fecha actual
    if (!(fecha1 instanceof Date) || !(fecha2 instanceof Date)) {
      throw TypeError("Las fechas no cumplen don tel timpo de dato DATE");
    }
    // fecha2.getTime() -> vota el tiempo en segundos
    let milisegundosdiferent = fecha2.getTime() - fecha1.getTime();
    // 1000 milisegundos quiere decir 1 segundo
    let diferencia = milisegundosdiferent / 1000;
    // 60 segundos es equivalente a 1 minuto
    // 60 minutos es equivalente a 1 hora
    // 3600 segundos es igual a 1 hora - 60 x 60
    diferencia /= 60 * 60;

    return Math.abs(Math.round(diferencia));
  }
  
  
  useEffect(()=>{
    (async ()=>{
      if(timeaperture.time_filter === 1){
        const time = await getaperturtime();
        //console.log(time)
        gettiemaperture(time);
      }
    })()
  },[timeaperture])

   useEffect(()=>{
    if (timetranscurre){
      requestAnimationFrame(tick);
    }
  },[timetranscurre]);

  function correcion_dato_fecha(itemtime) {
    return itemtime.toString().length === 1 ? "0" + itemtime.toString() : itemtime.toString();
  }

  function actualizarestado(date){
      if (!date) return "00:00:00"
      
      return `${(date.getDay() !== 0)?`${date.getDay()} day `: ``}${correcion_dato_fecha(
        date.getHours()
      )}:${correcion_dato_fecha(date.getMinutes())}${(date.getDay() !== 0)?``: ':' + correcion_dato_fecha(
        date.getSeconds()
      )}`;
  }

  return (
    <div className="timestily">{(timeporcen >= timeaperture.time_filter) ? <div style={{color:"#e53935"}}>Cerrado</div> : actualizarestado(timetranscurre)}</div>
  );
}
