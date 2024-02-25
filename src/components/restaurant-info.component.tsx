import React, { ReactElement } from "react";
import { StyleSheet, Text } from "react-native";

import { Card } from "react-native-paper";

type Restaurants = {
  name: string;
  icon: any;
  photos: any;
  address: string;
  openingHours: Date;
  rating: number;
  isClosedTemporarily: boolean;
};

type Props = {
  restaurant: Restaurants;
};

export function RestaurantInfoCard({ restaurant }: Props): ReactElement {
  const {
    name,
    icon,
    photos,
    address,
    openingHours,
    rating = 5,
    isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          style={styles.photo}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Card.Content>
          <Text style={styles.text}>Card </Text>
          <Text>Card content</Text>
        </Card.Content>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  photo: {
    margin: 10,
    borderRadius: 0,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 2,
  },
  text: {
    fontSize: 16,
  },
});
