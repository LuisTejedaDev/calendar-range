import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import {useDispatch} from 'react-redux'
import { CalendarRange } from './Components'

export default () => {
    
    return( 
        <>
            <SafeAreaView style={{flex: 0, backgroundColor: '#327BC0'}}/>
            <View style={styles.container}>
                <CalendarRange />
            </View>
            <SafeAreaView style={{flex: 0, backgroundColor: '#327BC0'}}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 12
    }
})