import React, { useEffect, useState } from 'react';

import GlobalApi from '../Services/GlobalApi';
import bannerImage from '../assets/Images/banner.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from '../Components/Footer'

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    // getPosts().then((resp) => {
    //   console.log(resp.data.teams, 'team Data');
    //   const teams = resp.data.teams;
    //   console.log(teams, 'teams');
    //   setPosts(teams);
    // });
    const data = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League`);
    console.log(data, 'data')
    setPosts(data?.data?.teams)
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substr(0, maxLength) + '...';
  };




  return (
    <div>

      <Header />

      <div className="flex justify-center my-8">
        <img src={bannerImage} alt="Banner" />
      </div>

      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          {posts?.map((team) => (
            <div key={team.idTeam} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src={team.strTeamBadge} alt={team.strTeam} className='w-[50%] mx-auto' />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{team.strTeam}</div>
                <p className="text-gray-700 text-base">{truncateDescription(team.strDescriptionEN, 100)}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => navigate('/detail/' + team.strTeam)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Home;
