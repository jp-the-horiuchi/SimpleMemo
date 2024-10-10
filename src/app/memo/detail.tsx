import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CircleButton from '../../components/CircleButton';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';

const Detail = (): JSX.Element => {
    const handlePress = (): void => {
        router.push('/memo/edit');
    };
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年</Text>
            </View>
            <View>
                <ScrollView style={styles.memoBody}>
                    <Text style={styles.memoText}>
                        青いvhぎえshふぇeojgfewgh@@weighewoihgewioghfweiewihいおwfひうぇhふぃおwqhf
                    </Text>
                </ScrollView>
            </View>
            <CircleButton style={{ top: 60, bottom: 'auto' }} onPress={handlePress}>
                <Entypo name="pencil" size={40} color="white" />
            </CircleButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
});

export default Detail;
