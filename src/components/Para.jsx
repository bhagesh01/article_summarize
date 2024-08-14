import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { copy, linkIcon, loader, tick } from "../assets";
import { articleUrlState , articleSummaryQuery } from "../services/recoil";


const Para = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  const [articleUrl, setArticleUrl] = useRecoilState(articleUrlState);
  const articleSummaryLoadable = useRecoilValueLoadable(articleSummaryQuery(articleUrl));

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem("articles"));

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (articleSummaryLoadable.state === 'hasValue' && articleSummaryLoadable.contents?.summary) {
      const newArticle = { ...article, summary: articleSummaryLoadable.contents.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  }, [articleSummaryLoadable.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingArticle = allArticles.find((item) => item.url === article.url);

    if (existingArticle) return setArticle(existingArticle);

    setArticleUrl(article.url);
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
          <img src={linkIcon} alt='link-icon' className='absolute left-0 my-2 ml-3 w-5' />

          <input
            type='url'
            placeholder='Paste the article link'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            onKeyDown={handleKeyDown}
            required
            className='url_input peer' 
          />
          <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '>
            <p className="text-2xl">↵</p>
          </button>
        </form>

        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          {allArticles.reverse().map((item, index) => (
            <div key={`link-${index}`} onClick={() => setArticle(item)} className='link_card'>
              <div className='copy_btn' onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt={copied === item.url ? "tick_icon" : "copy_icon"}
                  className='w-[40%] h-[40%] object-contain'
                />
              </div>
              <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='my-10 max-w-full flex justify-center items-center'>
        {articleSummaryLoadable.state === 'loading' ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : articleSummaryLoadable.state === 'hasError' ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasn't supposed to happen...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {articleSummaryLoadable.contents?.message}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                Article <span className='blue_gradient'>Summary</span>
              </h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Para