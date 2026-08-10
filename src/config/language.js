/** Switch between 'he' and 'en' to change site language and direction */
export const language = 'he';

export const direction = language === 'he' ? 'rtl' : 'ltr';

export const getText = (content) => {
  if (typeof content === 'string') return content;
  return content[language] ?? content.en ?? '';
};
