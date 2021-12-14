import type { Performer } from '@/lib/types'
import classnames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
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

  const classes = classnames(
    'bg-white border border-gray-300 rounded-md hover:shadow-md transition',
    className,
    {},
  )

  return (
    <div
      className={classes}
      itemScope
      // data-cy={cypressId}
    >
      <a
        // data-cy={`${cypressId}-video-link`}
        className="block h-52 relative"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {thumbnail && (
          <Image
            src={typeof thumbnail === 'object' ? thumbnail.url : thumbnail}
            layout="fill"
            alt={`The Act Booker - ${name}`}
            objectFit="cover"
          />
        )}
        <span className="absolute inset-0 bg-black bg-opacity-30" />
        {priceFrom && (
          <p className={styles.price}>
            <span>Prices From:</span> &pound;{priceFrom.toLocaleString()}
          </p>
        )}
      </a>
      <div className="p-4">
        <div className={styles.left}>
          <h2 className="font-bold font-xs" itemProp="name">
            <Link href={href}>
              <a className="hover:underline">{name}</a>
            </Link>
          </h2>
          {/* <p className={styles.location}>{location}</p> */}
        </div>
        {/* <ReviewStars amount={rating} amountOfReviews={5} /> */}
      </div>
    </div>
  )
}
