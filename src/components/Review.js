import './review.css';

export default function Review({content, author, posted}) {

  return (
    <div class="review">
      <div class="author">Posted by <b>{author}</b></div>
      <div class="date">{posted}</div>
      <div class="content">{content}</div>
    </div>
  )

}
