import React, { useState } from 'react';

import axios from 'axios';


const GithubContext = React.createContext();



const GithubProvider = ({ children }) => {

  const [githubUser, setGithubUser] = useState();

  const [locate, setLocate] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  // error
  const [error, setError] = useState({ show: false, msg: '' });

  const searchGithubUser = async ({ user,location,created }) => {
    toggleError();
    setIsLoading(true);
    if(location) setLocate(location);
    const response = await axios(`https://api.github.com/search/users?q=${user}+in:name+location:${location}+created:%3E${created}&type=users&per_page=50`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data.items);
    } else {
      toggleError(true, 'No user with that username');
    }
    setIsLoading(false);
  };

  function toggleError(show = false, msg = '') {
    setError({ show, msg });
  }

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        error,
        locate,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
