import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    messageContainer: {
        opacity: 0.5,
        marginTop: 6,
        marginBottom: 6,
        height: 530,
      },
      sectionDescription: {
        flexDirection: 'row',
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        padding: 6,
        borderWidth: 1,
        borderRadius: 10,
        maxWidth: '100%',
      },
      author: {
        fontWeight: 'bold',
      },
      message: {
        maxWidth: '80%',
      },
})

export default styles;