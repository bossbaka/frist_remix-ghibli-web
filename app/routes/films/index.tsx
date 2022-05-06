import { LoaderFunction, MetaFunction, useLoaderData, Form, Link } from "remix";
import { Film, getFilms } from "~/api/films";

export const meta: MetaFunction = () => {
  return { title: "Films | Studio Ghibli", description: "Desc" };
};

// SERVER SIDE
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  return getFilms(title);
};

// CLIENT SIDE
export default function FlimsIndex() {
  const data = useLoaderData<Film[]>();
  console.log(data);
  return (
    <div className="p-16 font-sans">
      <h1 className="text-5xl font-bold text-center text">
        Studio Ghibi Films
      </h1>

      <Form reloadDocument method="get" className="py-5">
        <label>
          Search
          <input
            type="text"
            name="title"
            placeholder="Type a Title ..."
            className="border-2 rounded py-2 px-3"
          />
        </label>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
          Search
        </button>
      </Form>

      <div className="grid grid-cols-4 gap-4">
        {data.map((film) => (
          <Link
            title={film.title}
            to={film.id}
            key={film.id}
            className="hover:shadow-2xl hover:scale-105; hover:font-bold cursor-pointer"
            prefetch="none"
          >
            <div> {film.title} </div>
            <img src={film.image} alt={film.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
