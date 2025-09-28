
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import { useEffect, useState } from "react";
import { PostProps } from "../interfaces";

const POSTS_API = "https://jsonplaceholder.typicode.com/posts?_limit=10";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    fetch(POSTS_API)
      .then(res => res.json())
      .then(data => {
        setPosts(data.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        })));
      });
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </main>
    </>
  );
}
