import React from 'react';
import { Root } from 'native-base';
import { RootNavigator } from './routes';

const App = () => {
    return (
        <Root>
            <RootNavigator />
        </Root>
    );
};

export default App;
