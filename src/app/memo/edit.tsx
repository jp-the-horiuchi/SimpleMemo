import { View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import CircleButton from '../../components/CircleButton';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

const Edit = (): JSX.Element => {
    const handlePress = (): void => {
        router.back();
    };
    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value="買い物リスト" />
            </View>
            <CircleButton onPress={handlePress}>
                <Feather name="check" size={40} color="ffffff" />
            </CircleButton>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24
    }
});

export default Edit;
