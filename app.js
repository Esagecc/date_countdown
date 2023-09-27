const second= document.getElementById('seconds');

const minute=document.getElementById('minutes');
const hour=document.getElementById('hours');
const day=document.getElementById('days');
const newyeardate= "12 apr 2024";

const countdown=()=>{
    const newdate= new Date(newyeardate);
    const date = new Date();
    const secleft= (newdate-date)/1000;
    const days=Math.floor(secleft/3600/24);
    const hours=(Math.floor(secleft/3600)%24);
    const min=(Math.floor(secleft/60)%60);
    const sec=(Math.floor(secleft%60))
    const timeformat=(time)=>{
      return  time<10? `0${time}`:time;
    }
    second.innerHTML=timeformat(sec);
    minute.innerHTML=timeformat(min);
    hour.innerHTML=timeformat(hours);
    day.innerHTML=timeformat(days);

    
   
    
}
countdown();
setInterval(countdown,1000);



