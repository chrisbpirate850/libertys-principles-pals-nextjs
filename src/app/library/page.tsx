'use client';

import Link from 'next/link';
import booksData from '@/data/books-data.json';

export default function LibraryPage() {
  const { books } = booksData;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a5f 0%, #8b5cf6 50%, #1e3a5f 100%)',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '50px', color: 'white' }}>
          <Link href="/" style={{
            display: 'inline-block',
            marginBottom: '20px',
            color: '#d4a574',
            textDecoration: 'none',
            fontSize: '16px'
          }}>
            ← Back to Home
          </Link>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '10px',
            fontWeight: 'bold',
            textShadow: '0 2px 10px rgba(139, 92, 246, 0.5)'
          }}>
            Liberty's Principles Library
          </h1>
          <p style={{ fontSize: '20px', opacity: 0.9, color: '#d4a574' }}>
            The Freedom Garden Series - {books.length} Adventures
          </p>
        </header>

        {/* Book Series Sections */}
        <div style={{ marginBottom: '60px' }}>
          {/* Freedom Garden Series (Ages 4-8) */}
          <div style={{
            marginBottom: '50px',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '30px',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{
              color: '#d4a574',
              fontSize: '32px',
              marginBottom: '10px',
              fontWeight: 'bold'
            }}>
              📚 The Freedom Garden Series
            </h2>
            <p style={{ color: 'white', fontSize: '18px', marginBottom: '30px', opacity: 0.9 }}>
              Ages 4-8 • 28 Books Teaching America's Founding Principles
            </p>

            {/* Book Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '30px'
            }}>
              {books.map((book) => (
                <Link
                  key={book.bookNumber}
                  href={`/book/${book.bookNumber}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    background: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '2px solid rgba(212, 165, 116, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(139, 92, 246, 0.5)';
                    e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.3)';
                    e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.2)';
                  }}>
                    {/* Book Cover */}
                    <div style={{
                      height: '400px',
                      background: `linear-gradient(135deg, ${getBookColor(book.bookNumber)})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <img
                        src={`/covers/book${book.bookNumber}.png`}
                        alt={`${book.title} cover`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          // If cover doesn't exist, show book number
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.number-placeholder')) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'number-placeholder';
                            placeholder.style.cssText = `
                              font-size: 72px;
                              color: white;
                              font-weight: bold;
                            `;
                            placeholder.textContent = book.bookNumber.toString();
                            parent.appendChild(placeholder);
                          }
                        }}
                      />
                    </div>

                    {/* Book Info */}
                    <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        color: '#333',
                        lineHeight: '1.4'
                      }}>
                        {book.title}
                      </h3>
                      <p style={{ color: '#666', fontSize: '14px', marginTop: 'auto' }}>
                        {book.pages.length} pages
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Coming Soon Sections */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {/* Board Books */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '30px',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              border: '2px dashed rgba(212, 165, 116, 0.5)'
            }}>
              <h2 style={{
                color: '#d4a574',
                fontSize: '28px',
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                👶 Board Books
              </h2>
              <p style={{ color: 'white', fontSize: '16px', marginBottom: '15px', opacity: 0.9 }}>
                Ages 0-3
              </p>
              <div style={{
                background: 'rgba(212, 165, 116, 0.2)',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <p style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
                  Coming Soon!
                </p>
                <p style={{ color: 'white', fontSize: '14px', opacity: 0.8, marginTop: '10px' }}>
                  Simple, sturdy books introducing freedom's values to the littlest patriots
                </p>
              </div>
            </div>

            {/* Chapter Books */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '30px',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              border: '2px dashed rgba(212, 165, 116, 0.5)'
            }}>
              <h2 style={{
                color: '#d4a574',
                fontSize: '28px',
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                📖 Chapter Books
              </h2>
              <p style={{ color: 'white', fontSize: '16px', marginBottom: '15px', opacity: 0.9 }}>
                Ages 8-12
              </p>
              <div style={{
                background: 'rgba(212, 165, 116, 0.2)',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <p style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
                  Coming Soon!
                </p>
                <p style={{ color: 'white', fontSize: '14px', opacity: 0.8, marginTop: '10px' }}>
                  Deeper adventures exploring history and civics for young readers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ textAlign: 'center', color: 'white', opacity: 0.8 }}>
          <p>Based on "The 5000 Year Leap" • Teaching freedom's principles through stories</p>
        </footer>
      </div>
    </div>
  );
}

function getBookColor(bookNumber: number): string {
  // Blended Navy/Purple/Gold palette
  const colors = [
    '#1e3a5f, #8b5cf6',  // Navy to purple
    '#8b5cf6, #a855f7',  // Purple to plum
    '#a855f7, #d4a574',  // Plum to gold
    '#d4a574, #1e3a5f',  // Gold to navy
    '#1e3a5f, #a855f7',  // Navy to plum
    '#8b5cf6, #d4a574',  // Purple to gold
    '#a855f7, #1e3a5f',  // Plum to navy
    '#d4a574, #8b5cf6',  // Gold to purple
  ];
  return colors[(bookNumber - 1) % colors.length];
}
