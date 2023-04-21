import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function WeightCalculator() {
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePriceChange = (text) => {
    setPrice(text);
  };

  const handleWeightChange = (text) => {
    setWeight(text);
  };

  const calculateTotalPrice = () => {
    const result = ((price / 1000) * weight).toFixed(2); // divide price by 1000 to get price per gram, then multiply by weight
    setTotalPrice(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weight Calculator</Text>
      <TextInput
        style={styles.input}
        onChangeText={handlePriceChange}
        value={price}
        placeholder="Price per kg"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleWeightChange}
        value={weight}
        placeholder="Weight (in grams)"
        keyboardType="numeric"
      />
      <Button onPress={calculateTotalPrice} title="Calculate" />
      <Text style={styles.result}>Total Price: {totalPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});