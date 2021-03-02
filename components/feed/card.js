import Link from 'next/link'
import React from 'react'
import {
  Nav, Tab, Row, Button, Card,
} from 'react-bootstrap'
import Likes from '../../components/Likes'

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const PostCard = (props) => {
  const {posts, vote, unVote} = props

  const formattedPosts = posts.map((post, index) => {
    return (
      <Card className="mb-2 text-left" key={index}>
        <Card.Header>
          <div className="panel-heading">
            <div className="float-md-right">
              <Likes
                post={post}
                upVote={() => vote(post, index, 1)}
                downVote={() => vote(post, index, 0)}
                unVote={() => unVote(post, index)}
              />
            </div>
            <div className="panel-title">{post.country}</div>
            <Link href="/post/[pid]" as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </div>
        </Card.Header>

        <Card.Body>
          <div>{post.report}</div>
        </Card.Body>

        <Card.Footer>
          <Tab.Container id="tabs-with-dropdown" defaultActiveKey="zero">
            <Row className="clearfix">
              <Nav bsPrefix="tabs">
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {/* <Comments colorScheme='light' href={weblink + post.id} /> */}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Tab 2 content
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
          <small className="text-muted">{post.dateposted}</small>
        </Card.Footer>
      </Card>
    )
  })

  return formattedPosts
}

export default PostCard
