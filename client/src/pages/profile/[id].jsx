import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { client, getProfile, getPublications } from '../../utils/api/api';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [publications , setPublications] = useState([]);
    const [ipfsUrl, setIpfsUrl] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            fetchProfile();
        }
    }, [id]);

    if (!profile) return null

    async function fetchProfile() {
        try {
            const response = await client.query(getProfile, { id }).toPromise();
            console.log("response,", response);
            setProfile(response.data.profile);

            const publicationData = await client.query(getPublications, { id }).toPromise();
            console.log({publicationData});


            const imageUrl = response.data.profile.picture.original.url.replace("ipfs://", "https://ipfs.io/ipfs/");
            setIpfsUrl(imageUrl);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            {profile.picture ? (
                <img src={ipfsUrl} alt="profile" className='w-40 h-40' />
            )
        :
            (<div className='w-80 h-80 bg-black'>

            </div>) 
        }
        <div>
            <h3>{profile.name}</h3>
            <h4>{profile.handle}</h4>
            <p>{profile.bio}</p>
            <p>Followers: {profile.stats.totalFollowers}</p>
                <p>Followers: {profile.stats.totalFollowing}</p>

        </div>
        </div>
    );
}

export default Profile;