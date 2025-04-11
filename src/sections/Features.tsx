const features = [
  {
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  },
  {
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  },
  {
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  },
  {
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  },
  {
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  },
  {
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  }
]

export const Features = () => {
  return (
      <section className="bg-white/70 text-black/70" >
        <div className="container">
          <h2>Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem esse ipsum magnam doloremque sit id temporibus numquam quidem doloribus odio consectetur, sint rerum.</p>
          <div>
            {features.map(({title, description}) => ())}

          </div>
        </div>
      </section>
  );
};
