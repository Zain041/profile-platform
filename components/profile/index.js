import React, { useEffect, useState, useCallback } from 'react'
import {
  Container, Row, Col, Image
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare, faTwitterSquare, faSnapchatSquare,
} from '@fortawesome/free-brands-svg-icons'

import Stats from './stats'
import Card from '../feed/card'
import styles from './styles.module.css'
import { CardBody } from 'react-bootstrap/Card'

const Profile = (props) => {
  const {postData, setPostData, profileStats, profile} = props
  const [loadingStats, setLoadingStats] = useState(true)

  const vote = useCallback(
    (post, index, voteValue) => {
      if (voteValue === 0) {
        if (post.vote === 1) {
          post.upVote -= 1
        }
        post.downVote += 1
      } else {
        if (post.vote === 0) {
          post.downVote -= 1
        }
        post.upVote += 1
      }

      post.vote = voteValue

      postData.posts.splice(index, 1, post)
      const updatedPosts = [...postData.posts]
      setPostData({ ...postData, posts: updatedPosts })
    }, [postData.posts],
  )

  const unVote = useCallback(
    (post, index) => {
      if (post.vote === 1) {
        post.upVote -= 1
      } else {
        post.downVote -= 1
      }

      post.vote = null

      postData.posts.splice(index, 1, post)
      const updatedPosts = [...postData.posts]
      setPostData({ ...postData, posts: updatedPosts })
    }, [postData.posts],
  )

  return (
    <div className={`${styles.profile} mt-2 mb-2 ml-5 mr-5`}>
      <Container fluid className="text-center">
        <Row>
          <Col>{profile.type}</Col>
        </Row>
        <Row className="justify-content-center header">
          <Col sm={12} md={12} lg={12} className={`${styles.block} bg-light pt-4 pb-4 mb-3 d-flex flex-column align-items-center`}>
            <Image src={profile.avatar} roundedCircle fluid thumbnail className={styles.avatar} />
            <h1 className="display-4">{profile.username}</h1>
            <div className="d-flex">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="m-1" />
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="m-1" />
              <FontAwesomeIcon icon={faSnapchatSquare} size="2x" className="m-1" />
              <FontAwesomeIcon icon={faGlobe} size="2x" className="m-1" />
            </div>
          </Col>
        </Row>
{/* mobile view */}
<Row className={`d-sm-flex d-lg-none d-flex d-md-none   justify-content-between`}>
<Row className={`${styles.bio} bg-light mb-5`}>
              <Col>
                <h3>About Me</h3>
                {profile.bio}
              </Col>
            </Row>
          <Col  md={3} className={`${styles.block} bg-light`}>
              <h3>Stats</h3>
              <h4>
                {profileStats.totalPosts}
                {profileStats.totalPosts === 1 ? ' Post' : ' Posts'}
              </h4>
              <div style={{marginLeft:'-70px'}}>
              <Stats data={profileStats.voteStats} />
              </div>
             
          </Col>
          <Col md={3} lg={3} className={`${styles.block} bg-light`}>
            
            <div style={{height:'300px'}} className="card mt-2">
  <div className="card-body">
  ads / post highlights / misc
  </div>
</div>
          </Col>
          <Col sm={12} md={5} lg={5}>
            
            <Row>
              <Col className={`p-0`}>
                <Card posts={postData.posts} vote={vote} unVote={unVote} />
              </Col>
            </Row>
          </Col>
         
        </Row>
     
{/* mobile view end */}
        <Row className={`d-md-flex d-lg-flex d-none   justify-content-between`}>
          <Col  md={3} className={`${styles.block} bg-light`}>
              <h3>Stats</h3>
              <h4>
                {profileStats.totalPosts}
                {profileStats.totalPosts === 1 ? ' Post' : ' Posts'}
              </h4>
              <div style={{marginLeft:'-70px'}}>
              <Stats data={profileStats.voteStats} />
              </div>
             
          </Col>
          <Col sm={12} md={5} lg={5}>
            <Row className={`${styles.bio} bg-light mb-5`}>
              <Col>
                <h3>About Me</h3>
                {profile.bio}
              </Col>
            </Row>
            <Row>
              <Col className={`p-0`}>
                <Card posts={postData.posts} vote={vote} unVote={unVote} />
              </Col>
            </Row>
          </Col>
          <Col md={3} lg={3} className={`${styles.block} bg-light`}>
            
            <div style={{height:'300px'}} className="card mt-2">
  <div className="card-body">
  ads / post highlights / misc
  </div>
</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
