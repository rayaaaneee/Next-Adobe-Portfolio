import { ChildrenInterface } from '@/utils/interface/children'
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const ThemeProvider = ({ children }: ChildrenInterface) => {
    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
        </NextThemesProvider>
    )
}

export default ThemeProvider
