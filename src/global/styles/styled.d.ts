//styled.d.ts é um arquivo para sobrescrever tipos
import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
    type ThemeType = typeof theme //typeof copiara o objeto theme para o ThemeType
    
    export interface DefaultTheme extends ThemeType{} 
}
