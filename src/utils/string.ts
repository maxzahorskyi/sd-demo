export const startCase = (str: string) => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;

export const clearString = (string: string) => string.replace(/(\\n)|[#\[\]]/g, "");
