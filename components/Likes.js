import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'

class Likes extends Component {
  constructor(props) {
    super(props)

    this.notLoggedInToVote = this.notLoggedInToVote.bind(this)
  }

  // eslint-disable-next-line class-methods-use-this
  notLoggedInToVote() {
    console.log('not logged in to vote')
  }

render() {
  const { post } = this.props
    const isLoggedIn = false
    return (
      <>
        <Button variant="Light" onClick={isLoggedIn ? () => { post.vote === 1 ? this.props.unVote() : this.props.upVote() } : this.notLoggedInToVote}>
          <FontAwesomeIcon icon={faThumbsUp} size="1x" color={(post.vote === 1) ? 'blue' : null} />
        </Button>
        {` ${post.upVote} `}
        <Button variant="Light" onClick={isLoggedIn ? () => { post.vote === 0 ? this.props.unVote() : this.props.downVote() } : this.notLoggedInToVote}>
          <FontAwesomeIcon icon={faThumbsDown} size="1x" color={(post.vote === 0) ? 'blue' : null} />
        </Button>
        {` ${post.downVote} `}
      </>
    )
  }
}

Likes.propTypes = {
  // passed from parent
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
  }),
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    vote: PropTypes.number,
    upVote: PropTypes.number.isRequired,
    downVote: PropTypes.number.isRequired,
  }).isRequired,
  // passed from container
  downVote: PropTypes.func.isRequired,
  upVote: PropTypes.func.isRequired,
  unVote: PropTypes.func.isRequired,
}

export default Likes
