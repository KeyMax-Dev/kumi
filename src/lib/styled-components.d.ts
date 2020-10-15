import { Theme } from 'lib';

// import original module declarations
import 'styled-components';

declare module 'styled-components' {
    interface DefaultTheme extends Theme {}
}
