import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect } from 'react'
import {client, recommendedProfiles} from '../utils/api/api'

const Community = () => {
    const [profiles, setProfiles] = useState([])
    const [ipfsUrl, setIpfsUrl] = useState(null);

    useEffect(() => {
        fetchProfiles()
    }, [])

    async function fetchProfiles() {
        try {
            const response = await client.query(recommendedProfiles).toPromise()
            console.log({response})
            setProfiles(response.data.recommendedProfiles)
        } catch (error) {
            console.error(error)
        }
    }

    function replaceIpfsLink(url) {
        return url.replace("ipfs://", "https://ipfs.io/ipfs/");
    }

  return (
    <div>
        {profiles.map((profile, index) => (
            <Link to={`/profile/${profile.id}`} key={index}>
                <div className="">
                    {profile.picture && profile.picture.original ? (
                        <img src={replaceIpfsLink(profile.picture.original.url)} alt={profile.handle} className="w-40 h-40" />
                    ) : (
                        <img src="https://via.placeholder.com/150" alt="no image" />
                    )}
                    <h4 className='font-bold'>{profile.handle}</h4>
                    <p>{profile.bio}</p>
                </div>
            </Link>
        ))}

    </div>
  )
}

export default Community