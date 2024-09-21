import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SVGIconTextLogo from '@/src/assets/SVG/SVGIconTextLogo';
import SVGIconLogo from '../assets/SVG/SVGIconLogo';

const HeaderPage = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <SVGIconLogo />
                    <SVGIconTextLogo />
                </View>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Bem-vindo de volta, Marcos</Text>
                    <Text style={styles.dateText}>1 de Dezembro de 2025</Text>
                </View>
            </View>
            <View style={styles.line}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        position: 'relative',
        
    },
    logo: {
      position: 'absolute',
      left: -20,
      top: 5,
      flexDirection: 'row',
      alignItems: 'center',
  },

    welcomeContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 20,
      },
      welcomeText: {
        fontSize: 22,
        color: '#333',
        marginEnd:15,
        marginBottom: 1,
    },
    dateText: {
        fontSize: 16,
        color: '#555',
        marginTop: 10,
    },
    line: {
        width: '90%',
        height: 1,
        backgroundColor: '#bdb3b3',
        marginTop: -10,
        marginLeft: 20,
    },
});

export default HeaderPage;
