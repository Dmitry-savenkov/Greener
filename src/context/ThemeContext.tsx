import { useFonts } from 'expo-font';
import React, { createContext } from 'react';

export const ThemesContext = createContext();

const ThemesContextProvider = (props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}) => {
    const [fontsLoaded] = useFonts({
        'SFUIDisplay-Regular': require('./../assets/fonts/SFUIDisplay-Regular.ttf'),
        'SFUIDisplay-Medium': require('./../assets/fonts/SFUIDisplay-Medium.ttf'),
        'SFUIDisplay-Bold': require('./../assets/fonts/SFUIDisplay-Bold.ttf')
    });

    return <ThemesContext.Provider value={{ fontsLoaded }}>{props.children}</ThemesContext.Provider>;
};

export default ThemesContextProvider;
