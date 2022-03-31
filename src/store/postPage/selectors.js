// export const selectPosts = (reduxState) => reduxState.postPage.post;
// export const selectComments = (reduxState) => reduxState.postPage.comments;

export function selectPostAndComments(reduxState) {
  return reduxState.postPage.loading
    ? null
    : {
        post: reduxState.postPage.post,
        comments: reduxState.postPage.comments,
      };
}
