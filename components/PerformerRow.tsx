import type { Performer } from '@/lib/types'
import type { FC } from 'react'
import Link from 'next/link'
// import { CATEGORIES_MAP } from '../../../../constants';
import { PerformerCard } from './PerformerCard'
import styles from '../styles/components/PerformersRow.module.css'

export interface Props {
  performers: Performer[]
  title: string
}

export const PerformersRow: FC<Props> = ({ performers, title }) => {
  return (
    <section className={styles.root}>
      <div className={styles.header}>
        {/* <h1 className={styles.title}>{CATEGORIES_MAP[title]}</h1> */}
        <Link href={`/browse/${title}`}>
          <a className={styles.seeAll}>See All</a>
        </Link>
      </div>
      <div className={styles.scroll}>
        {performers.map((performer) => (
          <div className={styles.performer} key={performer.id}>
            <PerformerCard {...performer} />
          </div>
        ))}
      </div>
    </section>
  )
}
