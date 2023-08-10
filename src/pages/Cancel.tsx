export function Cancel() {
  return (
    <>
      <h1 className="text-center">Oh no! You canceled your Stripe payment!</h1>
      <div
        className="image"
        style={{
          backgroundImage: 'url("/imgs/cancel.webp")',
          height: "100vh",
          width: "w-full",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
}
