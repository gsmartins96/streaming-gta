import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 20px;

  & :hover {
    box-shadow: 5px 4px 20px 0px rgba(255, 255, 255, 0.1);
  }
`;

export const CardContainer = styled.div`
  width: 30%;
  height: auto;
  border-radius: 5px;
`;

export const ImgContainer = styled.img`
  width: 100%;
  height: 300px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const InfosContainer = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 15px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("https://media.istockphoto.com/photos/dark-black-and-blue-grungy-wall-background-for-display-or-montage-of-picture-id1150477705?k=20&m=1150477705&s=612x612&w=0&h=Yrqw1w6bEJ40kZFTSovkLtu4VE52zLgl-n6AE1t2BuM=");
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  z-index: 2;
  cursor: pointer;
  color: #fff;
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
