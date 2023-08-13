import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/navbar/NavBar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modal/RegisterModal';
import LoginModal from './components/modal/LoginModal';
import RentModal from './components/modal/RentModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser  from './actions/getCurrentUser';
import SearchModal from './components/modal/SearchModal';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <RegisterModal />
          <LoginModal />
          <NavBar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
