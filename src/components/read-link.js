import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ReadLink = styled(props => <Link {...props} />)`
    display: inline-block;
    font-size: 0.875rem;
`;

export default ReadLink;