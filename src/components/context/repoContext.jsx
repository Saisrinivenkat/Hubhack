import React, { useState } from 'react';

import axios from 'axios';


const GithubRepoContext = React.createContext();



const GithubRepoProvider = ({ children }) => {

  const [githubRepo, setGithubRepo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // error
  const [error, setError] = useState({ show: false, msg: '' });

  const searchGithubRepo = async ({ topic,language,created,stars }) => {
    toggleError();
    setIsLoading(true);
    const response = await axios(`https://api.github.com/search/repositories?q=topic:${topic}+language:${language}+created:%3E${created}+stars:<${stars}&type=Repositories&per_page=50`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubRepo(response.data.items);
    } else {
      toggleError(true, 'No user with that username');
    }
    setIsLoading(false);
  };

  function toggleError(show = false, msg = '') {
    setError({ show, msg });
  }

  return (
    <GithubRepoContext.Provider
      value={{
        githubRepo,
        error,
        searchGithubRepo,
        isLoading,
      }}
    >
      {children}
    </GithubRepoContext.Provider>
  );
};

export { GithubRepoProvider, GithubRepoContext };
