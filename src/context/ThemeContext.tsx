// import * as React from 'react';
// import { useFonts } from 'expo-font';

// interface AppContextInterface {
//     name: string;
//     author: string;
//     url: string;
// }

// const AppCtx = React.createContext<AppContextInterface | null>(null);

// // Provider in your app

// const sampleAppContext: AppContextInterface = {
//     name: 'Using React Context in a Typescript App',
//     author: 'thehappybug',
//     url: 'http://www.example.com'
// };

// export const App = () => <AppCtx.Provider value={sampleAppContext}>...</AppCtx.Provider>;

// // Consume in your app

// export const PostInfo = () => {
//     const appContext = React.useContext(AppCtx);
//     const [fontsLoaded] = useFonts({
//         SFUIText: require('./src/assets/FontsFree-Net-sf-ui-text-regular-58646b56a688c.ttf')
//     });
//     return (
//         <div>
//             Name: {appContext.name}, Author: {appContext.author}, Url: {appContext.url}
//         </div>
//     );
// };
