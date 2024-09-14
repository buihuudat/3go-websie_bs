import NcImage from "./NcImage/NcImage";
import PhotoFullView from "./PhotoFullView";

const ImageGridView = ({ photos }: { photos: string[] }) => {
  return (
    <div className="relative grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-4 h-[500px]">
      <div className="col-span-4 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer ">
        <PhotoFullView
          className="absolute inset-0 object-cover rounded-md sm:rounded-xl w-full h-full"
          src={photos[0]}
          alt=""
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
      </div>
      {photos
        .filter((_, i) => i >= 1 && i < 5)
        .map((item, index) => (
          <div
            key={index}
            className={`relative rounded-md sm:rounded-xl overflow-hidden ${
              index >= 3 ? "hidden sm:block" : ""
            }`}
          >
            <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
              <NcImage
                className="absolute inset-0 object-cover rounded-md sm:rounded-xl w-full h-full"
                src={item || ""}
                alt=""
                sizes="400px"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        ))}
    </div>
  );
};

export default ImageGridView;
