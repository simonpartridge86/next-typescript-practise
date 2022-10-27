import { GetStaticProps, NextPage } from 'next'
import App from 'next/app'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Character, GetCharacterResults } from '../types'

interface PageProps {
  characters: Character[];
}

export default function Home ({characters}: PageProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {characters.map((character)=>{
        return <div key={character.id}>{character.name}
        <Image src={character.image} alt={character.name} width="200" height="200"/>
        </div>
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
const res = await fetch("https://rickandmortyapi.com/api/character");
const {results}: GetCharacterResults = await res.json();

return {
  props:{
    characters: results,
  }
}
}
