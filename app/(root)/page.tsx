import SearchForm from "../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

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
    </>
  );
}
