/* eslint-disable camelcase */

import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
// import * as SplashScreen from "expo-splash-screen"

import { useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins'

import '@/styles/global.css'

// SplashScreen.preventAutoHideAsync()

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_500Medium,
        Poppins_400Regular,
    })

    if (!fontsLoaded) {
        return
    }

    // SplashScreen.hideAsync()

    return (
        <>
            <StatusBar style="dark" />
            <Slot />
        </>
    )
}
