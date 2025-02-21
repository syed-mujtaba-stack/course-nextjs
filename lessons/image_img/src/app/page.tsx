/* eslint-disable @next/next/no-img-element */

const responsiveImage = {
  width: "100%",
  height: "auto",
};

export default function Page() {
  return (
    <div>
      <img style={responsiveImage} alt="cat" src="/images/cat.png" />
    </div>
  );
}
