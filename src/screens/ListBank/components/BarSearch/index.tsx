import React, {useState} from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import {Nullable} from '@interfaces/generic';
import {filterByName, getOriginalList} from '@redux/bankSlice';
import {useAppDispatch} from '@redux/hooks';

import iconSerch from './assets/ic_search.png';
import clearIcon from './assets/ic_close.png';
import styles from './styles';

function BarSearch() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>('');
  let inputRef: Nullable<TextInput> = null;
  const handlePressClearSearch = () => {
    inputRef!.clear();
    setSearch('');
    dispatch(getOriginalList());
  };
  const handleChangeText = (text: string) => {
    dispatch(filterByName(text.toLowerCase()));
    setSearch(text);
  };
  return (
    <View style={[styles.container, styles.containterShadow]}>
      <Image
        source={iconSerch}
        resizeMode="contain"
        style={styles.iconSearch}
      />
      <TextInput
        ref={ref => (inputRef = ref)}
        autoComplete="off"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder={'Buscar por nombre'}
        onChangeText={handleChangeText}
        value={search}
        autoCapitalize="none"
      />
      {search.length > 0 && (
        <TouchableOpacity onPress={handlePressClearSearch}>
          <Image
            source={clearIcon}
            resizeMode="contain"
            style={styles.clearIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
export default BarSearch;
