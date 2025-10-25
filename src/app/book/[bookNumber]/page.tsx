'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import booksData from '@/data/books-data.json';

export default function BookReaderPage() {
  const params = useParams();
  const router = useRouter();
  const bookNumber = parseInt(params.bookNumber as string);

  const book = booksData.books.find(b => b.bookNumber === bookNumber);

  const [currentPageIndex, setCurrentPageIndex] = useState(-1); // -1 for preface, 0+ for pages
  const [showActivity, setShowActivity] = useState(false);
  const [showEpilogue, setShowEpilogue] = useState(false);

  if (!book) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3a5f 0%, #8b5cf6 50%, #1e3a5f 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px'
      }}>
        Book not found
      </div>
    );
  }

  const totalPages = book.pages.length;
  const isPreface = currentPageIndex === -1;
  const isStoryPage = currentPageIndex >= 0 && currentPageIndex < totalPages;

  function nextPage() {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else if (currentPageIndex === totalPages - 1 && !showActivity) {
      setShowActivity(true);
    } else if (showActivity && !showEpilogue) {
      setShowEpilogue(true);
    }
  }

  function prevPage() {
    if (showEpilogue) {
      setShowEpilogue(false);
    } else if (showActivity) {
      setShowActivity(false);
    } else if (currentPageIndex > -1) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a5f 0%, #8b5cf6 50%, #1e3a5f 100%)',
      padding: '20px'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
      }}>
        <Link href="/library" style={{
          color: '#d4a574',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          ← Back to Library
        </Link>
        <h1 style={{ fontSize: '28px', margin: 0, textAlign: 'center', flex: 1 }}>
          {book.title}
        </h1>
        <div style={{ width: '150px' }}></div>
      </div>

      {/* Book Content */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        minHeight: '600px'
      }}>
        {/* Preface */}
        {isPreface && (
          <div style={{ padding: '60px 40px', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '32px',
              color: '#1e3a5f',
              marginBottom: '30px',
              fontWeight: 'bold'
            }}>
              {book.title}
            </h2>
            <div style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#333',
              whiteSpace: 'pre-line',
              textAlign: 'left',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              {book.preface}
            </div>
          </div>
        )}

        {/* Story Pages */}
        {isStoryPage && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '600px'
          }}>
            {/* Left Page - Illustration */}
            <div style={{
              background: `linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              borderRight: '2px solid #ddd'
            }}>
              <img
                src={book.pages[currentPageIndex].imagePlaceholder}
                alt={`Page ${currentPageIndex + 1} illustration`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '500px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.placeholder-text')) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'placeholder-text';
                    placeholder.style.cssText = `
                      font-size: 18px;
                      color: #999;
                      text-align: center;
                    `;
                    placeholder.textContent = 'Illustration coming soon...';
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>

            {/* Right Page - Text */}
            <div style={{
              padding: '60px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <p style={{
                fontSize: '20px',
                lineHeight: '1.8',
                color: '#333',
                fontFamily: 'var(--font-nunito), sans-serif',
                whiteSpace: 'pre-line'
              }}>
                {book.pages[currentPageIndex].text}
              </p>
              <div style={{
                marginTop: 'auto',
                paddingTop: '20px',
                color: '#999',
                fontSize: '14px',
                textAlign: 'right'
              }}>
                Page {currentPageIndex + 1} of {totalPages}
              </div>
            </div>
          </div>
        )}

        {/* Activity Page */}
        {showActivity && book.activity && (
          <div style={{ padding: '60px 40px' }}>
            <h2 style={{
              fontSize: '28px',
              color: '#8b5cf6',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Activity Time!
            </h2>
            <div style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#333',
              whiteSpace: 'pre-line'
            }}>
              {book.activity}
            </div>
          </div>
        )}

        {/* Epilogue */}
        {showEpilogue && book.epilogue && (
          <div style={{ padding: '60px 40px' }}>
            <h2 style={{
              fontSize: '28px',
              color: '#1e3a5f',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              For Parents & Educators
            </h2>
            <div style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#333',
              whiteSpace: 'pre-line'
            }}>
              {book.epilogue}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div style={{
        maxWidth: '900px',
        margin: '30px auto 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <button
          onClick={prevPage}
          disabled={isPreface}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            background: isPreface ? '#ccc' : '#d4a574',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: isPreface ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            if (!isPreface) {
              e.currentTarget.style.background = '#c69563';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isPreface) {
              e.currentTarget.style.background = '#d4a574';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          }}
        >
          ← Previous
        </button>

        <div style={{ color: 'white', fontSize: '16px' }}>
          {isPreface && 'Preface'}
          {isStoryPage && `Page ${currentPageIndex + 1} / ${totalPages}`}
          {showActivity && 'Activity'}
          {showEpilogue && 'Epilogue'}
        </div>

        <button
          onClick={nextPage}
          disabled={showEpilogue}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            background: showEpilogue ? '#ccc' : '#8b5cf6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: showEpilogue ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            if (!showEpilogue) {
              e.currentTarget.style.background = '#7c3aed';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseLeave={(e) => {
            if (!showEpilogue) {
              e.currentTarget.style.background = '#8b5cf6';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
