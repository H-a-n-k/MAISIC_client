
export const toDMY = (date?: Date): string => { 
    if (!date) date = new Date(Date.now());

    return date.toString().split('T')[0].split('-').reverse().join('/');
}