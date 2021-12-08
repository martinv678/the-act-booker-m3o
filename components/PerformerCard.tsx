import type { Performer } from '@/lib/types'
import classnames from 'classnames'
import Link from 'next/link'
import PlayIcon from '@heroicons/react/outline/PlayIcon'
// import ReviewStars from '../../../../components/ReviewStars'
import styles from '../styles/components/PerformerCard.module.css'

export interface PerformerCardProps extends Performer {
  className?: string
}

export function PerformerCard({
  className,
  thumbnail,
  location,
  priceFrom,
  // rating,
  name,
  id,
}: PerformerCardProps) {
  const href = `/performer/${id}`

  const classes = classnames(styles.root, className, {})

  return (
    <div
      className={classes}
      itemScope
      itemType="https://schema.org/Product"
      // data-cy={cypressId}
    >
      <a
        // data-cy={`${cypressId}-video-link`}
        className={styles.link}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {/* <img
          src={}
          title={stageName}
          alt={`The Act Booker - ${stageName} - Book & Hire the best live entertainment`}
        /> */}
        {priceFrom && (
          <p className={styles.price}>
            <span>Prices From:</span> &pound;{priceFrom.toLocaleString()}
          </p>
        )}
      </a>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.name} itemProp="name">
            <Link
              href={href}

              // data-testid={`${cypressId}-text-link`}
            >
              <a>{name}</a>
            </Link>
          </h2>
          {/* <p className={styles.location}>{location}</p> */}
        </div>
        {/* <ReviewStars amount={rating} amountOfReviews={5} /> */}
      </div>
    </div>
  )
}
