import ActionsCard from './ActionsCard';

export default function card({ page }) {
  return (
    <div className="flex flex-col justify-between h-[350px]  border-solid border-slate-300 rounded hover:drop-shadow-md">
      <figure className="">
        <a href={page.url}>
          <img
            src={page?.image?.url || page?.icon?.url}
            alt={page.description}
            className="w-full h-44 rounded object-cover"
          />
        </a>
        <figcaption className="my-3 px-2">
          <p className="my-0 font-bold">{page.title}</p>
          <a
            className="my-0 text-slate-700 hover:boder hover:border-b hover:border-solid hover:border-slate-700"
            href={page.domain}>
            {page.domain}
          </a>
        </figcaption>
      </figure>
      <footer>
        <ActionsCard pageInfo={page} />
      </footer>
    </div>
  );
}
