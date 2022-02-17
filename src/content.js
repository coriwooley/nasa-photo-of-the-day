import React from "react";
import styled, { keyframes } from "styled-components";

const StyledText = styled.div`
  background: black;
  color: white;
  padding: 2rem;
  margin: 3rem;
  max-width: 45%;
  display: flex;
  flex-direction: column;
  border-radius: 130px;
  align-content: center;

`;
const Styledh1 = styled.h1`
  background: black;
  color: white;
  padding: 2rem;
  margin: 1rem;
  max-width: 32%;
  
  flex-direction: column;
  border-radius: 130px;
  align-content: center;

`;

const StyledPage = styled.div`
background: lightgray;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 70%;
margin: auto;
`

const Media = (props) => {
  const { title, url, explanation, mediaType, date } = props;
  return (
    <StyledPage>
      <Styledh1>{title}</Styledh1>
      <div className="video-wrapper">
        {mediaType === "video" ? (
          <iframe title={title} width="750" height="500" src={url} />
        ) : (
          <img src={url} width="70%" alt="Nasa POTD" />
        )}
      </div>
      <StyledText>
        <h3>{date}</h3>
        <p>{explanation}</p>
      </StyledText>
    </StyledPage>
  );
};

export default Media;
