import TopNav from './topNav'
import BottomNav from './bottomNav'

export default function Layout({ children }) {
  return (
    <>
      <TopNav />
        <main>{children}</main>
      <BottomNav />
    </>
  )
}