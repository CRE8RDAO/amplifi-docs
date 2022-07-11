import * as React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Search } from '@styled-icons/fa-solid/Search';

const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
  margin-right: 10px;
  position: absolute;
  left: 15px;
  color: #3a3a3a;
  fill: #3a3a3a!important;

`;



const focus = (props) => css`
  background: white;
  color: #3a3a3a;
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: #3a3a3a;
    margin: 0.3em;
  }
`;

const collapse = (props) => css`
  width: 0;
  cursor: pointer;
  color: ${(props) => props.theme.lightBlue};
  + ${SearchIcon} {
    color: #3a3a3a;
  }
  ${(props) => props.focus && focus()}
  margin-left: ${(props) => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${(props) => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: #3a3a3a;
  }
`;

const expand = (props) => css`
  background: #3a3a3a;
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`;

const collapseExpand = (props) => css`
  ${(props) => (props.collapse ? collapse() : expand())}
`;

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: white;
  transition: ${(props) => props.theme.shortTrans};
  border-radius: ${(props) => props.theme.smallBorderRadius};
  {collapseExpand}
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-left: 15px;
  }
`;

export default connectSearchBox(({ refine, ...rest }) => {
  const preventSubmit = (e) => {
    e.preventDefault();
  };





  return (
    <Form className={'formElement'} onSubmit={preventSubmit}>
      <SearchIcon  />
      <Input
        className={'searchInput '}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        {...rest}
      />
    </Form>
  );
});
