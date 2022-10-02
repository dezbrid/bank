import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, ListRenderItem, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {bankAsync, listBank} from '@redux/bankSlice';
import {BankObject} from '@interfaces/bank';
import {ListKeyExtractor} from '@interfaces/generic';

import Bank from './components/Bank';
import styles from './styles';

function ListBank() {
  const dispatch = useAppDispatch();
  const banks = useAppSelector(listBank);
  useEffect(() => {
    if (banks.length === 0) {
      dispatch(bankAsync());
    }
  }, [dispatch, banks]);
  const renderItem: ListRenderItem<BankObject> = ({item}) => <Bank {...item} />;
  const keyExtractor: ListKeyExtractor<BankObject> = (_, i) => i.toString();
  const separator = () => <View style={styles.separator} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList<BankObject>
        data={banks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
}

export default ListBank;
