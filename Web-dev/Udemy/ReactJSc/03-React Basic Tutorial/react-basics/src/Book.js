/*
    export const Book => Named export
        import { Book } from "./Book";

    export default Book => Default export
        import anyName from "./Book";
 */
export const Book = ({ title, author, img, altImg }) => {
  // attribute and eventHandler
  // onClick
  // onMouseOver
  const clickHandler = () => {
    alert("Click");
  };
  const complexHandler = (author) => {
    alert(author);
  };
  return (
    <article className="book">
      <img src={img} alt={altImg} />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference
      </button>

      <button type="button" onClick={() => complexHandler(author)}>
        more complex
      </button>
    </article>
  );
};
