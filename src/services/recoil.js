import { atom, selector, selectorFamily } from 'recoil';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleUrlState = atom({
  key: 'articleUrlState',
  default: '',
});


export const articleSummaryQuery = selectorFamily({
  key: 'articleSummaryQuery',
  get: (articleUrl) => async () => {
    if (!articleUrl) return null;

    const response = await fetch(
      `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(articleUrl)}&length=3`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
        },
      }
    );

    const data = await response.json();
    return data;
  },
});