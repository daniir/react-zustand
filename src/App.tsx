import Header from './components/Header'
import ItemsForm from './components/ItemsForm'
import ItemsList from './components/ItemsList'

function App() {

  return (
    <div>
      <Header />
      <section className="container row">
        <article className="col">
          <ItemsList />
        </article>
        <article className="col">
          <h3 className="text-center fw-bold">Add new products</h3>
          <ItemsForm />
        </article>
      </section>
    </div>
  )
}

export default App