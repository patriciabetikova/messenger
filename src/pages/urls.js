import { ChatPage } from 'pages/ChatPage'
import { LoginPage } from 'pages/LoginPage'

export const urls = {
  home: { component: ChatPage, path: '/', url: '/' },
  login: {
    component: LoginPage,
    path: '/login',
    url: '/login',
  },
}
