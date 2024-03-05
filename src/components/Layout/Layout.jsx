import { Header, Footer } from '..'

export const Layout = ({ children }) => (
  <>
    <Header />
    <section>
      <div>
        <div>{children}</div>
      </div>
    </section>
    <Footer />
  </>
)
