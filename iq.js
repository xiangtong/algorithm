function newiq(iq,days){
  for(var i=1;i<=days;i++){
    iq=iq*(1+i/100)
    console.log(1+i/100);
  }
  console.log(iq);
}

newiq(101,98)
