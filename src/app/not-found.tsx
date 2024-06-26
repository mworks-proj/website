import { ErrorMessage } from '@components/ErrorMessage'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { fetchGlobals } from '@root/app/_graphql'

export default async function NotFound() {
  const { mainMenu, footer } = await fetchGlobals()

  return (
    <>
      <Header {...mainMenu} />
      <div>
        <ErrorMessage />
        <div id="docsearch" />
        <Footer {...footer} />
      </div>
    </>
  )
}
