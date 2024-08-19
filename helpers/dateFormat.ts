



export function dateFormat(date: string, interval: string): string {
  switch (interval) {
    case "1h": {
      //diario
      return `${date.slice(10,16)}`
      break
    }
    //semanal
    case "1day" :{
  return `${date.slice(5,10)} `
    }
    //mensual
    case "1week":{
  return `${date.slice(5,10)} `
    }
  //anual
    case "1month":{
        return `${date.slice(0,7)} `
    }
  }


}
