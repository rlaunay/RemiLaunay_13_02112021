export const isEmail = (value: string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);

export const isNotEmpty = (value: string) => value.trim() !== '';