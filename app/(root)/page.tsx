import StartupCard from "@/components/StartupCard";
import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1 },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Ideate. Vote. Win. Make your mark in virtual pitch battles.
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : `All startups`}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
