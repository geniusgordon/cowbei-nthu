import React, { Component } from 'react';
import styled from 'styled-components';
import throttle from 'lodash/throttle';
import Post from './Post';
import Container from '../../components/Container';

const ScrollWrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

const ListWrapper = styled.div`
  padding-bottom: 1rem;
`;

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.scrollWrapper.addEventListener('scroll', this.handleScroll);
    this.fetchPosts();
  }
  componentWillUnmount() {
    this.scrollWrapper.removeEventListener('scroll', this.handleScroll);
  }
  fetchPosts = async () => {
    this.setState({ loading: true });
    const offset = this.state.posts.length;
    const res = await fetch(`/api/posts?offset=${offset}`);
    const posts = await res.json();
    this.setState({ posts: this.state.posts.concat(posts), loading: false });
  };
  handleScroll = throttle(e => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    if (offsetHeight + scrollTop >= scrollHeight - 10) {
      this.fetchPosts();
    }
  }, 300);
  scrollRef = ref => {
    this.scrollWrapper = ref;
  };
  render() {
    const list = this.state.posts.map(post => <Post key={post.id} post={post} />);
    return (
      <ScrollWrapper innerRef={this.scrollRef}>
        <Container>
          <ListWrapper>{list}</ListWrapper>
        </Container>
      </ScrollWrapper>
    );
  }
}

export default PostList;

