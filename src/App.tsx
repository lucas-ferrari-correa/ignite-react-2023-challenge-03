import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { IssuesProvider } from './context/IssuesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <IssuesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssuesProvider>
    </ThemeProvider>
  )
}
