import ThemeActions from 'app/redux/actions/theme-actions';
import { ReduxState } from 'app/redux/root-state';
import { Button, DarkTheme, getGlobalTheme, LightTheme, setGlobalTheme, Theme } from 'lib';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarThemeTogglerContainer } from './styles';

const SidebarThemeToggler = (): JSX.Element => {
    const dispatch = useDispatch();
    const theme = useSelector<ReduxState, Theme>(state => state.theme);

    return (
        <SidebarThemeTogglerContainer>
            <Button
                styleType="icon"
                icon="sun"
                disabled={theme === LightTheme}
                onClick={() => dispatch(ThemeActions.setTheme(LightTheme))}
            />
            <Button
                styleType="icon"
                icon="moon"
                disabled={theme === DarkTheme}
                onClick={() => dispatch(ThemeActions.setTheme(DarkTheme))}
            />
        </SidebarThemeTogglerContainer>
    );
};

export default SidebarThemeToggler;
