import { client } from "@/sanity/lib/client";
import {
  PLAYLIST_BY_SLUG_QUERY,
  STARTUP_BY_ID_QUERY,
} from "@/sanity/lib/queries";
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import markdownit from "markdown-it";
import DOMPurify from "isomorphic-dompurify";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

const md = markdownit();

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [post, { select: editorPosts }] = await Promise.all([
    await client.fetch(STARTUP_BY_ID_QUERY, { id }),
    await client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "editors-pick",
    }),
  ]);

  if (!post) {
    return notFound();
  }

  // convert to markdown to HTML
  const rawContent = md.render(post?.pitch || "");

  // sanitized Content for protection against XSS attacks
  const sanitizedContent = DOMPurify.sanitize(rawContent);

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>
      <section className="section_container">
        <img
          src={post?.image}
          alt="thumbnail"
          className="w-full h-auto rounded-full"
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex flex-between flex-wrap gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex  gap-2 items-center mb-3 "
            >
              <Image
                src={post?.author?.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full"
              />

              <div>
                <p className="text-20-medium">{post?.author?.name}</p>
                <p className="text-16-medium !text-black-300">
                  {post?.author?.username}
                </p>
              </div>
            </Link>

            <p className="category-tag">{post.category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>
          {sanitizedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>
        <hr className="divider" />

        {/*TODO:  EDITOR SELECTED STARTUP */}
        {editorPosts?.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-30-semibold">Editor Picks</p>
            <ul className="mt-7 card_grid-sm">
              {editorPosts.map((post: StartupTypeCard, index: number) => (
                <StartupCard key={index} post={post} />
              ))}
            </ul>
          </div>
        )}

        {/* Views count */}
        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;
