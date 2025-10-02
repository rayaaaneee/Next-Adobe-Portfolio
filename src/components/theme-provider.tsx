import ChildrenInterface from '@/utils/interface/children-interface'
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const ThemeProvider = ({ children }: ChildrenInterface) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider
