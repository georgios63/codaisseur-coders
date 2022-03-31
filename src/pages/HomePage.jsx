import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/feed/actions";
import { selectFeedPosts } from "../store/feed/selectors";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <div>
      <h2>Posts Feed</h2>
      {!posts
        ? "Loading"
        : posts.map((post) => (
            <ul key={post.id}>
              <li>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </li>
            </ul>
          ))}
      <button onClick={() => dispatch(fetchPosts)}>Load more</button>
    </div>
  );
};

export default HomePage;
