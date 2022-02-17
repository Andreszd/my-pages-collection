import Icon from './Icon';

export default function card({ page }) {
  return (
    <div className="flex flex-col justify-between h-[350px] ">
      <figure className="">
        <img
          src={page?.image?.url || page?.icon?.url}
          alt={page.description}
          className="w-full h-44 rounded object-cover"
        />
        <figcaption className="my-3">
          <p className="my-0 font-bold">{page.title}</p>
          <p className="my-0 ">{page.domain}</p>
        </figcaption>
      </figure>

      <footer>
        <div className="flex text-color-black text-lg gap-3">
          <Icon type="check" className="h-5 w-5" />
          <Icon type="favorities" className="h-5 w-5" />
          <Icon type="trash" className="h-5 w-5" />
        </div>
      </footer>
    </div>
  );
}
