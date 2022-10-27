import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Post = styled.View`
flex-direction: row;
padding:15px;
border-bottom-width: 1px;
border-bottom-color: rgba(0,0,0,0.1);
border-bottom-style: solid;
margin-top: 10px;
`;

const PostDetails = styled.View`;

`

const PostDate = styled.Text`
font-size:12px;
color: rgba(0,0,0,0.4);
margin-top: 2px;
`;


const PostTitle = styled.Text`
font-size: 16px;
font-weight: 700;
`;

const PostImage = styled.Image`
width: 100px;
height: 100px;
border-radius:12px;
margin-right:12px;
`;

export default function App() {
  return (
    <View>
      <Post>
        <PostImage source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrvMUm5Y7_aJDKxv8_fQTbhMHaYOlevDfbzg&usqp=CAU"}}/>
        <PostDetails>
        <PostTitle>Тестовая статья</PostTitle>
        <PostDate>27/10/2022</PostDate>
        </PostDetails>
      </Post>
      <StatusBar theme="auto" />
    </View>
  );
}

