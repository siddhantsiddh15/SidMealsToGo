import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { styled } from "styled-components/native";

import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info.component";

const SearchBarView = styled(View)`
  background-color: blue;
  width: 100%;
  color: yellow;
  padding: 16px;
  justify-content: center;
`;

const MainAreaView = styled(SafeAreaView)`
  flex: 1;
  alignitems: centee;
  background-color: red;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
`;

export default function RestaurantScreen(): React.ReactElement {
  const [text, setText] = useState("");

  const handleSearchChange = (text: string) => {
    setText(text);
  };
  return (
    <>
      <MainAreaView>
        <SearchBarView>
          <Searchbar
            value={text}
            onChangeText={handleSearchChange}
            mode="bar"
          />
        </SearchBarView>
        <View style={styles.list}>
          <RestaurantInfoCard
            restaurant={{
              name: "test",
              icon: "test",
              photos: "test",
              address: "test",
              openingHours: new Date(),
              rating: 5,
              isClosedTemporarily: false,
            }}
          />
        </View>
      </MainAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "yellow",
    width: "100%",
    padding: 16,
    flex: 1, // takes the remaining portion of the screen
  },
});
