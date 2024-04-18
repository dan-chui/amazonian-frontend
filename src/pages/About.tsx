export function About() {
  return (
    <>
      <div>
        <h3 style={{ fontFamily: 'Cinzel Decorative' }}>
          <strong>Amazonian</strong>
        </h3>
        <p>
          <i>Mission:</i> To provide a hand-picked selection of premium items,
          at the most affordable prices.
        </p>
        <p>
          <i>History:</i> Founded by Dan Chui in 2023, Amazonian is passionate
          about doing our part to make life better. We provide high-quality
          merchandise, great value, and exceptional customer service. We aim to
          be the #1 choice for people who appreciate, and want the finer things
          in life.
        </p>
        <p>
          <i>Inquiries:</i>{' '}
          <a href="mailto:contact@danchui.dev">contact@amazonian.com</a>
        </p>
      </div>
      <div
        className="image"
        style={{
          backgroundImage: 'url("/imgs/business-team.webp")',
          height: '100vh',
          width: 'w-full',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </>
  );
}
