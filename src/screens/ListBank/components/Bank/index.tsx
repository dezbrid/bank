import React from 'react';
import {Text, View, Image} from 'react-native';
import {BankObject} from '@interfaces/bank';
import styles from './styles';

function Bank(bank: BankObject) {
  const {url, bankName, description} = bank;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: url}} resizeMode="stretch" />
      <View style={styles.containerText}>
        <Text style={styles.bankName}>{bankName}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
export default Bank;
