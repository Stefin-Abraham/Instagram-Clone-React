import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider';
import Navbar from './Navbar';

function Profile() {
    const [{ user }] = useStateValue(); 
  return (
    <Container>
        <Navbar/>
        <Main>
            <UserProfile>
                <div className ="user-image">
                    <img 
                      src = {user?.photoURL === null ? "./user.png" : user?.photoURL} 
                      alt="" 
                    />
                </div>
                <h2>{user?.userName}</h2>
            </UserProfile>
            <PostContainer>
                <Post>
                    <img
                    src="https://i.insider.com/5eec699d5af6cc4aef004e53?width=700"
                    />
                </Post>
                <Post>
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Qwl8rkc4bHg7Aq-mqgT1DhIp-WUHztQgdg&usqp=CAU"
                    />
                </Post>
                <Post>
                    <img
                    src="https://i.insider.com/5eec699d5af6cc4aef004e53?width=700"
                    />
                </Post>
                <Post>
                    <img
                    src="https://onextrapixel.com/wp-content/uploads/2012/03/the-road-not-taken.jpg"
                    />
                </Post>
                <Post>
                    <img
                    src="https://i.insider.com/5eec699d5af6cc4aef004e53?width=700"
                    />
                </Post>
                <Post>
                    <img
                    src="https://theworldpursuit.com/wp-content/uploads/2020/04/Best-Places-to-Visit-in-Africa-4-911x512.jpeg"
                    />
                </Post>
            </PostContainer>
        </Main>
    </Container>
    
  );
}
const Container = styled.div`
  width: 100%;
  margin-top: 80px;
`;
const Main = styled.main`
  margin: auto;
  height: fit-content;
  padding: 10px;
  max-width: 935px;
  z-index: -100;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding-bottom: 40px;

 .user-image {
   margin-right: 30px;
   z-index: -100;
   width: 155px;
   height: 155px;
   img {
      width: 100%;
      border-radius: 50%;
    }
 } 
 h2 {
  font-size: 26px;
  font-weight: 500;
 }

`;

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(159px, 293px));
  grid-gap: 20px;
  justify-content: center;

  @media only screen and (max-width: 510px) {
    grid-gap: 0;
  }
`;

const Post = styled.div`
  width: 100%;
  cursor: pointer;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
  &:hover {
    filter: grayscale(0.8);
  }
`;

export default Profile