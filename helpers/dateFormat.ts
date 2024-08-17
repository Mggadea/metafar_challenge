function getMonthAbbreviation(monthNumber: number): string {
  const months: string[] = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
  ];

  if (monthNumber < 1 || monthNumber > 12) {
      throw new Error('Número de mes inválido. Por favor, ingresa un número entre 1 y 12.');
  }

  return months[monthNumber - 1];
}


export function dateFormat(date: string, interval: string): string {
  switch (interval) {
    case "1h": {
      //diario
      return date.slice(8,10)+' '+getMonthAbbreviation(date.slice(6,7))
      break
    }
    case "1day" :{
      return date.slice(8,10)+' '+getMonthAbbreviation(date.slice(6,7))
    }
    case "1week":{
        return date.slice(5, 10);

    }
    case "1month":{
        return date.slice(4,10);
    }
  }

}
