import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";

export default function PostPage() {
  return (
    <div>
      <BackButton link="/" text="Go Back" />
      <PostsTable />
      <PostPagination />
    </div>
  );
}
