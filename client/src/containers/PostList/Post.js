import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import styled from 'styled-components';
import moment from 'moment';

const StyledText = styled(CardText)`
  white-space: pre-wrap;
`;

const PostWrapper = styled.div`
  padding-top: 1rem;
`;

const Post = ({ post }) => (
  <PostWrapper>
    <Card>
      <CardHeader
        title={`#靠北清大${post.cowbei_id}`}
        subtitle={moment(post.submitted_time).format('YYYY-MM-DD HH:mm')}
      />
      <StyledText>
        {post.message}
      </StyledText>
    </Card>
  </PostWrapper>
);

export default Post;

