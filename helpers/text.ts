export const getTextLonger = (texts: string[]) => texts.reduce((a, b) => a.length > b.length ? a : b).length;

export const formatText = (text: string, maxLength: number, character = ' ') => {
  const middle = maxLength - text.length;
  return text + character.repeat(middle);
};