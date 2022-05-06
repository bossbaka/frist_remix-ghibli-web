export type CommentEntry = {
  name: string;
  message: string;
  filmId: string;
};

export async function getComments(filmId?: string) {
  const respon = await fetch(`http://localhost:3001/comments?filmId=${filmId}`);
  return respon.json();
}

export async function addComment(comment: CommentEntry) {
  const respon = await fetch("http://localhost:3001/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return respon.json();
}
