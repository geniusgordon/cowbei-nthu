import React, { Component } from 'react';
import styled from 'styled-components';
import Post from './Post';
import Container from '../../components/Container';

const ListWrapper = styled.div`
  padding-bottom: 1rem;
`;

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    fetch('/api/posts').then(res => res.json()).then(posts => this.setState({ posts }));
  }
  render() {
    const list = this.state.posts.map(post => <Post key={post.id} post={post} />);
    return (
      <Container>
        <ListWrapper>{list}</ListWrapper>
      </Container>
    );
  }
}

export default PostList;

