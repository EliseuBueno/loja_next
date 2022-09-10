import styles from '../styles/Home.module.css'
import Cards from './components/Cards'

export async function getStaticProps() {
  const maxPokemons = 251 //informa o número máximo de pokemons
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    }
  }
}

export default function Home({ pokemons }) {
  return (
    <div>
      <h1>PokeNext</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <Cards key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  )
}
