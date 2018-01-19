/**
 * Created by hanseh on 18/01/2018.
 */
import React from 'react';
import { compose, setDisplayName, setPropTypes } from 'recompose';
import moment from 'moment';
import { Text, Body } from 'native-base';
import { Button as ReactButton } from 'react-native';
import styles from './styles';


const enhance = compose(
  setDisplayName('OrderItem'),
  setPropTypes({ order: React.PropTypes.object.isRequired,
    navigation: React.PropTypes.object.isRequired,
  }),
);

const OrderItem = ({navigation, order}) => { return <Body style={styles.itemMargin}>
<Text note style={{ fontSize: 10 }}>{moment(order.created_at).format('MM/DD/YYYY  h:mm a')}</Text>
<Text style={{ color: '#1e90ff' }}>{order.tracking_number}</Text>
<Text style={{ color: '#1e90ff' }}>{order.buyer.name}</Text>
<ReactButton title="View Order" color="#C1C6C4" onPress={() => navigation.navigate('OrderDetails', order)}/>
</Body>
};

export default enhance(OrderItem);
