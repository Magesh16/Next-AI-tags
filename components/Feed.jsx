"use client"
import {useState, useEffect} from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [allPosts ,setAllPosts] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const filterResults = (searchText)=>{
    const regex = new RegExp(searchText, "i");
    return allPosts.filter((item) => regex.test(item.userId.username) || regex.test(item.prompt) || regex.test(item.tag))
  }

  const handleSearchChange = async(e)=>{
    clearTimeout(searchTimeout);
    setSearchText(e.target.value)
    setSearchTimeout(
      setTimeout(()=>{
        const typedSearch = filterResults(e.target.value);
        setSearchedResults(typedSearch);
      },500)
    )
  }
  const handleTagClick = (tagName)=>{
    // const searchResult = filterResults(tagName);
    // setSearchedResults(searchResult);
    // setSearchText(searchResult)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await fetch('/api/prompt');
        const data = await response.json();
        setAllPosts(data);
      }catch(err){
        console.log("err"+err);
      }
    };
    fetchPosts();
  }, []);



  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a hashtag or username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}

      </section>
  )
}

export default Feed