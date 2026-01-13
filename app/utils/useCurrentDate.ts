import { useState, useEffect } from 'react';

export const useCurrentDate = () => {
  const [dateInfo, setDateInfo] = useState({ weekday: '', fullDate: '' });

  useEffect(() => {
    const now = new Date();
    const weekday = now.toLocaleDateString('pt-BR', { weekday: 'long' });
    const fullDate = now.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    
    const formattedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
    
    setDateInfo({ weekday: formattedWeekday, fullDate });
  }, []);

  return dateInfo;
};
