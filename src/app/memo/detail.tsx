import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CircleButton from '../../components/CircleButton';
import Entypo from '@expo/vector-icons/Entypo';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Memo } from '../../types/memo';
import { auth, db } from '../../config';
import { doc, onSnapshot } from 'firebase/firestore';

const handlePress = (id: string): void => {
    router.push({ pathname: '/memo/edit', params: { id } });
};

const Detail = (): JSX.Element => {
    const id = String(useLocalSearchParams().id);
    const [memo, setMemo] = useState<Memo | null>(null);

    useEffect(() => {
        if (auth.currentUser === null) return;
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
        const unsubscribe = onSnapshot(ref, (memoDoc) => {
            const { bodyText, updatedAt } = memoDoc.data() as Memo;
            setMemo({
                id: memoDoc.id,
                bodyText,
                updatedAt
            });
        });
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text numberOfLines={1} style={styles.memoTitle}>
                    {memo?.bodyText}
                </Text>
                <Text style={styles.memoDate}>
                    {memo?.updatedAt?.toDate()?.toLocaleString('ja-jp')}
                </Text>
            </View>
            <View>
                <ScrollView style={styles.memoBody}>
                    <Text style={styles.memoText}>{memo?.bodyText}</Text>
                </ScrollView>
            </View>
            <CircleButton style={{ top: 60, bottom: 'auto' }} onPress={() => handlePress(id)}>
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
        paddingHorizontal: 27
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
        paddingVertical: 32
    }
});

export default Detail;
