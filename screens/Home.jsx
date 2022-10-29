import axios from "axios";
import { useEffect, useState } from "react";
import { View, Alert, FlatList, ActivityIndicator, Text, RefreshControl, TouchableOpacity } from "react-native";
import { Post } from "../components/Post";

export const HomeScreen = () => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://635c0a0b66f78741d5907e85.mockapi.io/posts")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка","Не удалось получить статьи");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchPosts, []);
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Загрузка...</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
        data={items}
        renderItem={({ item }) => (
       <TouchableOpacity>
           <Post
            title={item.title}
            imageUrl={item.imageUrl}
            createAt={item.createAt}
          />
       </TouchableOpacity>
        )}
      />
    </View>
  );
}
