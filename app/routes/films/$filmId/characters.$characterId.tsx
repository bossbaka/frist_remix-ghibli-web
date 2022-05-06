import { LoaderFunction, useCatch, useLoaderData } from "remix";
import { FilmCharacter, getFilmCharacter } from "~/api/films";
import invariant from "tiny-invariant";

export let loader: LoaderFunction = async ({ params }) => {
  invariant(params.characterId, "expected params.filmId");

  return getFilmCharacter(params.characterId);
};

export default function Character() {
  const characterDetails = useLoaderData<FilmCharacter>();
  return (
    <div className="mb-3">
      <div className="text-3xl mb-2"> Character Details</div>
      <div className="p-4 rounded shadow-lg bprder">
        <div className="text-gray-700 font-bold text-xl mb-2">
          {characterDetails.name}
        </div>
        <ul className="py-2">
          <li>{characterDetails.gender}</li>
          <li>{characterDetails.age}</li>
          <li>{characterDetails.eye_color}</li>
          <li>{characterDetails.hair_color}</li>
        </ul>
      </div>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <div className="mb-3">
        <div className="text-3xl mb-2">Details</div>
        <div className="p-4 rounded shadow-lg border bg-orange-200 border-orange-600">
          <div className="text-gray-700 font-bold text-xl mb-2">
            {caught.statusText}
          </div>
          <p>
            {caught.status} {caught.statusText}
          </p>
        </div>
      </div>
    );
  }

  throw new Error("Unkown error");
}

export function ErrorBoundary({ error }: any) {
  return (
    <div className="mb-3">
      <div className="text-3xl mb-2"> Details</div>
      <div className="p-4 rounded shadow-lg border bg-rose-200 border-rose-600">
        <div className="text-gray-700 font-bold text-xl mb-2">
          Uh oh... Sorry something went wrong!
        </div>
        <p>{error?.message}</p>
      </div>
    </div>
  );
}
