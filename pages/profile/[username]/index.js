import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Row, Col, Button } from 'react-bootstrap'

// import errorPage from '../../pages/404'
import NavBar from '../../../components/NavBar'
import ProfileComponent from '../../../components/profile'
import styles from '../../../styles/profile.module.css'

const Profile = (props) => {
  const router = useRouter()
  const { username } = router.query
  const [loadingProfile, setLoadingProfile] = useState(true)
  const [profile, setProfile] = useState({})
  const [profileStats, setProfileStats] = useState({voteStats: []})
  const [postData, setPostData] = useState({posts: []})

  // mock data
  useEffect(() => {
    // mock profile
    setProfile({
      avatar: "http://lorempixel.com/200/200",
      bio: "Sed fugiat culpa voluptatem autem id.",
      id: 17,
      social_links: [{"link_type_id": 1, "url": "https://jillian.com", "type": "Facebook"},{"link_type_id": 2, "url": "https://faye.net", "type": "Twitter"},{"link_type_id": 3, "url": "https://brycen.info", "type": "Snapchat"},{"link_type_id": 4, "url": "http://dejah.net", "type": "Youtube"},{"link_type_id": 5, "url": "https://penelope.org", "type": "Website"}],
      type: "Super Admin",
      username: "admin",
    })

    // most profile stats
    const postsCount = 16
    const totalUpVotes = 7
    const totalDownVotes = 1
    const totalVotes = totalUpVotes + totalDownVotes

    setProfileStats({
      totalPosts: postsCount,
      voteStats: [
        { name: 'Up Votes', value: totalUpVotes, percentage: `${Math.round((totalUpVotes / totalVotes) * 100)}%` },
        { name: 'Down Votes', value: totalDownVotes, percentage: `${Math.round((totalDownVotes / totalVotes) * 100)}%` },
      ],
    })

    // mock profile post data
    // title - 50 chars max
    // report - 300 chars max
    // country - 50 chars max
    setPostData({
      hasMore: true,
      posts: [{country: "Angola",
        dateposted: "February 21 at 10:02PM",
        downVote: 0,
        id: 153,
        report: "mock report",
        title: "mock title",
        upVote: 1,
        vote: 1,
        user_id: 17,
      }, {
        country: "Angola",
        dateposted: "February 21 at 9:50PM",
        downVote: 0,
        id: 151,
        report: "lorem ipsum",
        title: "test title",
        upVote: 1,
        user_id: 17,
      }, {
        country: "United Arab Emirates",
        dateposted: "February 21 at 8:54PM",
        downVote: 0,
        id: 150,
        report: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
        title: "report from UAE",
        upVote: 0,
        user_id: 17,
      }, {
        country: "Angola",
        dateposted: "February 21 at 8:53PM",
        downVote: 0,
        id: 149,
        report: "A report of some lorem ipsum text in Angola, for reasons",
        title: "new issue from Angola",
        upVote: 0,
        user_id: 17,
      }, {
        country: "Argentina",
        dateposted: "February 21 at 8:45PM",
        downVote: 0,
        id: 148,
        report: "a report from argentina",
        title: "Lorem ipsum dolor sit amet, consectetuer adipiscin",
        upVote: 0,
        user_id: 17,
      }, {
        country: "Canada",
        dateposted: "February 21 at 8:45PM",
        downVote: 0,
        id: 147,
        report: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
        title: "headline of something",
        upVote: 0,
        user_id: 17,
      }, {
        country: "Egypt",
        dateposted: "February 21 at 8:45PM",
        downVote: 0,
        id: 146,
        report: "a report from argentina",
        title: "Lorem ipsum dolor sit amet, consectetuer adipiscin",
        upVote: 0,
        user_id: 17,
      }, {
        country: "China",
        dateposted: "February 21 at 8:45PM",
        downVote: 0,
        id: 145,
        report: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
        title: "a report from China",
        upVote: 0,
        user_id: 17,
      }]

    })
  }, [])


  return (
    <div>
      <div className={styles.background} />
        <NavBar showLogin showUser />
        <ProfileComponent profile={profile} profileStats={profileStats} postData={postData}/>
    </div>
  )
}

export default Profile
