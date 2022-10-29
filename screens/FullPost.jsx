import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert,View } from "react-native";
import styled from "styled-components/native";
import Loading from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://635c0a0b66f78741d5907e85.mockapi.io/posts/1")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статью");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
     <Loading/>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: data.imageUrl,
        }}
      />
      <PostText>
     {data.text}
      </PostText>
    </View>
  );
};
