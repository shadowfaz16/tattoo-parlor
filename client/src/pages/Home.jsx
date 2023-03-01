import React, {useState, useEffect} from 'react'
import {Loader, Card, FormField} from '../components'
import { motion } from 'framer-motion'


const RenderCards = ({data, title}) => {
  if (data?.length > 0) {
    return data.map((post, i) => 
      <Card key={post._id} {...post} id={i} />
    )
  }
  return (
    <h2 className='mt-5 font-bold text-emerald-500 uppercase'>{title}</h2>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://tattoo-parlor.onrender.com/api/v1/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const result = await response.json();
          setPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [])

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = posts.filter((item) => item.prompt.toLowerCase().includes(searchText.toLowerCase()) || item.name.toLowerCase().includes(searchText.toLowerCase()));

        setSearchedResults(searchResults);
      }, 200)
    );
  }

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: .3,
      },
    },
  }


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0 }}
    className='max-w-7xl mx-auto'>
        <motion.div variants={stagger}>
        <motion.div variants={fadeInUp}>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community Showcase</h1>
        </motion.div>
        <motion.div variants={fadeInUp}>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
          Browse through a collection of imaginative and visually stunning tattoos generated at The Virtual Tatoo Parlor!
        </p>
        </motion.div>
      <motion.div variants={fadeInUp} className='mt-16'>
        <FormField
        LabelName='Search tattoos, artists, etc...'
        type='text'
        name='search'
        placeholder='Search tattoos, artists, etc...'
        value={searchText}
        handleChange={handleSearchChange}
         />
      </motion.div>
      </motion.div>

      <motion.div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div> ) : (
            <>
            {searchText && (
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>Showing results for <span className='text-[#222328]'>{searchText}</span></h2>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {searchText ? (
                <RenderCards data={searchedResults} title='No search results found :(' />
              ) : (
                <RenderCards data={posts} title='No posts found' />
              )}
            </div>
            </>
          )}
      </motion.div>
    </motion.div>
  )
}

export default Home