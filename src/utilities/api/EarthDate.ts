export type EarthDateString = `${string}-${string}-${string}`;

export const isValidEarthDate = (dateString: EarthDateString): boolean => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
  
    return regex.test(dateString);
  }