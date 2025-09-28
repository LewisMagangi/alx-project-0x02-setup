

import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

const POSTS_API = "https://jsonplaceholder.typicode.com/posts?_limit=10";

export async function getStaticProps() {
  const res = await fetch(POSTS_API);
  const data = await res.json();
  interface ApiPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const posts: PostProps[] = data.map((post: ApiPost) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));
  return {
    props: { posts },
  };
}

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
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
