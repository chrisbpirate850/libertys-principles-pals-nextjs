import { books } from '@/data/books';
import { characters } from '@/data/characters';
import { principles } from '@/data/principles';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-secondary/50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-center">
            Liberty&apos;s Principles Pals
          </h1>
          <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            A magical children&apos;s book series teaching the 28 founding principles of American freedom through garden adventures. Perfect for ages 2-10, homeschool families, and civic education.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/library"
              className="inline-block px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              📚 Explore the Library
            </a>
            <a
              href="#principles"
              className="inline-block px-8 py-4 bg-accent text-white font-bold text-lg rounded-lg shadow-lg hover:bg-accent/90 transition-all hover:scale-105"
            >
              🌟 View 28 Principles
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">About the Series</h2>
          <p className="text-lg text-gray-700">
            Liberty&apos;s Principles Pals is a civics education adventure for young children. In each story, Ande (age 7), her younger brother Sam (age 6), and wise Nanny Dolores explore a magical garden where everyday adventures teach timeless American principles from honesty and responsibility to the value of freedom. Designed for ages 5-10, the series makes learning about our founding values fun and engaging.
          </p>
        </div>
      </section>

      {/* ALL 6 BOOKS - Content visible to AI */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Books</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, i) => (
              <article key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-3">{book.title}</h3>
                <p className="text-gray-700 mb-4">{book.description}</p>
                {book.principle && <p className="text-primary font-semibold">Teaches Principle #{book.principle}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ALL 7 CHARACTERS - Content visible to AI */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Meet the Characters</h2>

          <h3 className="text-3xl font-bold mb-8 text-center">Main Characters</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {characters.filter(c => c.group === "main").map((char) => (
              <article key={char.id} className="bg-secondary/20 p-6 rounded-lg">
                <h4 className="text-2xl font-bold mb-2">{char.name}</h4>
                <p className="text-primary font-semibold mb-3">{char.role}</p>
                <p className="text-gray-700 mb-3">{char.description}</p>
                {char.funFact && <p className="text-sm italic">Fun Fact: {char.funFact}</p>}
                {char.principle && (
                  <p className="mt-3 font-semibold text-sm">
                    Teaches Principle #{char.principle.number}: {char.principle.name}
                  </p>
                )}
              </article>
            ))}
          </div>

          <h3 className="text-3xl font-bold mb-8 text-center">Garden Friends</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {characters.filter(c => c.group === "garden").map((char) => (
              <article key={char.id} className="bg-secondary/20 p-5 rounded-lg">
                <h4 className="text-xl font-bold mb-2">{char.name}</h4>
                <p className="text-primary font-semibold text-sm mb-2">{char.role}</p>
                <p className="text-gray-700 text-sm mb-2">{char.description}</p>
                {char.funFact && <p className="text-xs italic">{char.funFact}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ALL 28 PRINCIPLES - CRITICAL FOR SEO */}
      <section id="principles" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            The 28 Founding Principles of Freedom
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Each story teaches one of the 28 founding principles inspired by <em>The 5,000 Year Leap</em> by W. Cleon Skousen. Every principle includes historical context, Founding Father quotes, and reflection questions.
          </p>

          <div className="space-y-8">
            {principles.map((principle) => (
              <article key={principle.id} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Principle {principle.number}: {principle.title.replace(` (Principle ${principle.number})`, '')}
                </h3>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {principle.content}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-xl mb-2">Liberty&apos;s Principles Pals</p>
          <p className="mb-2">By Christopher J. Bradley - Author, Veteran, Civic Educator</p>
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Liberty&apos;s Principles Media. Teaching freedom&apos;s principles through magical garden stories for children ages 2-10.
          </p>
        </div>
      </footer>
    </main>
  );
}
