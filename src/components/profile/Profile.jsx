// import clsx from "clsx"
import css from "./Profile.module.css"

export default function ProfileCard({
  name, tag, location, image, stats: {
    followers, views, likes
  }
}) {
  return (
    <div className={css.userWrapper}>
      <div className={css.generalInfo}>
        <img
          src={image}
          alt={name}
          width="240px"
        />
        <p className={css.friendName}>{name}</p>
        <p className={css.friendTag}>@{tag}</p>
        <p className={css.friendLocation}>{location}</p>
      </div>

      <ul className={css.userStats}>
        <li>
          <span className={css.statName}>Followers</span>
          <span className={css.statValue}>{followers}</span>
        </li>
        <li>
          <span className={css.statName}>Views</span>
          <span className={css.statValue}>{views}</span>
        </li>
        <li>
          <span className={css.statName}>Likes</span>
          <span className={css.statValue}>{likes}</span>
        </li>
      </ul>
    </div>

  )
}