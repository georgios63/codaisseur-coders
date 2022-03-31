import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";

const PostPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const post = useSelector(selectPostAndComments);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      <p>Post Page</p>
      {!post ? (
        "loading"
      ) : (
        <div>
          <p>{post.post.title}</p>
          <p>{post.post.content}</p>
          <div>
            {post.comments?.rows.map((comment) => (
              <p key={comment.id}>{comment.text}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPage;
