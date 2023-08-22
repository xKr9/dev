import data from "./data";

export default function TileSelector({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (id: number) => void;
}) {
  return (
    <div className="flex sm:flex-col sm:w-[300px] sm:overflow-hidden flex-row overflow-x-auto gap-x-10  gap-y-5">
      {data.map((tile) => {
        return (
          <div
            key={tile.id}
            onClick={() => onSelect(tile.id)}
            className={`cursor-pointer ${
              selected === tile.id &&
              "border-t-2 sm:border-t-0 sm:border-l-2 sm:border-t-transparent border-l-primary border-t-primary"
            }`}
          >
            <p
              className={`pt-4 sm:pt-0 sm:pl-4 ${
                selected === tile.id
                  ? "text-primary font-semibold"
                  : "text-accent"
              }`}
            >
              {tile.company}
            </p>
          </div>
        );
      })}
    </div>
  );
}
