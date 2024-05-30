type ImageProps = {
  image: {
    preview?: string | undefined;
    name?: string | undefined;
  };
};

export default function Image({ image }: ImageProps) {
  return (
    <div className="w-full h-full flex ">
      <img
        className="w-full h-full rounded-2xl"
        src={image?.preview}
        alt={image?.name}
      />
    </div>
  );
}
