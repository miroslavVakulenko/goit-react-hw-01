// import clsx from "clsx"
// import css from "./Profile.modue.css"

export default function ProfileCard({
  name, tag, location, image, stats: {
    followers, views, likes
  }
}) {
  return (
    <div>
  <div>
    <img
       src={image}
       alt={name}
    />
    <p>{name}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
     <span>Followers</span>
     <span>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
   </ul>
</div>

  )
}