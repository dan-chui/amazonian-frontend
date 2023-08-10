export function Success() {
  return (
    <>
      <h1 className="text-center">Thank You for your purchase!</h1>
      <div
        className="image"
        style={{
          backgroundImage: 'url("/imgs/success.webp")',
          height: "100vh",
          width: "w-full",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
}
