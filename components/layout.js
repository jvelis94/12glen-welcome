import BottomNav from './bottomNav'

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <BottomNav />
    </>
  )
}