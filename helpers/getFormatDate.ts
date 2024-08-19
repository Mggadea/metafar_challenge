export const getFormattedDate = (interval: 'Diario' | 'Semanal' | 'Mensual' | 'Anual'): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
  
    switch (interval) {
      case 'Diario':
        return `${year}-${month}-${day}`;
      case 'Semanal':
        const weekAgo = new Date(today);
        weekAgo.setDate(today.getDate() - 7);
        const weekAgoYear = weekAgo.getFullYear();
        const weekAgoMonth = String(weekAgo.getMonth() + 1).padStart(2, '0');
        const weekAgoDay = String(weekAgo.getDate()).padStart(2, '0');
        return `${weekAgoYear}-${weekAgoMonth}-${weekAgoDay}`;
      case 'Mensual':
        const prevMonth = new Date(today);
        prevMonth.setMonth(today.getMonth() - 1);
        const prevMonthYear = prevMonth.getFullYear();
        const prevMonthDate = String(prevMonth.getDate()).padStart(2, '0');
        return `${prevMonthYear}-${String(prevMonth.getMonth() + 1).padStart(2, '0')}-${prevMonthDate}`;
      case 'Anual':
        const prevYear = year - 1;
        const prevYearDate = String(today.getDate()).padStart(2, '0');
        return `${prevYear}-${month}-${prevYearDate}`;
      default:
        throw new Error('Intervalo no válido');
    }
  };
  
  
  console.log(getFormattedDate('Semanal')); 
  