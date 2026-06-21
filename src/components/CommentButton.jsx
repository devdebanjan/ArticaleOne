import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; 
import { supabase } from '../../supabaseClient.js';

export default function CommentSection({ articleId }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  
  // Hover states for interactive buttons
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isConfirmHovered, setIsConfirmHovered] = useState(false);
  const [isCancelHovered, setIsCancelHovered] = useState(false);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('article_id', articleId)
      .order('created_at', { ascending: false });

    if (error) console.error('Error fetching comments:', error);
    else setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, [articleId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !commentText.trim()) {
      setError('Please provide both your name and a comment before submitting.');
      return;
    }

    setShowPopup(true);
  };

  const confirmAndPostComment = async () => {
    setShowPopup(false); 

    const { error: insertError } = await supabase
      .from('comments')
      .insert([
        {
          article_id: articleId,
          user_name: name,
          comment_text: commentText,
        },
      ]);

    if (insertError) {
      setError('Failed to post comment. Please try again.');
      console.error(insertError);
    } else {
      setCommentText('');
      fetchComments(); 
    }
  };

  return (
    <div style={{ marginTop: '40px', maxWidth: '800px', margin: '40px auto 0 auto' }}>
      {/* 🪄 FIX APPLIED: Changed color to var(--text-main) so it flips in Night Mode */}
      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '32px', fontWeight: '900', color: 'var(--text-main)', marginBottom: '30px', transition: 'color 0.6s ease' }}>
        Join the Discussion
      </h3>

      {/* STYLED COMMENT FORM */}
      <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '50px' }}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ 
            width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid #e2e8f0', 
            background: '#ffffff', color: '#111827', fontFamily: "'Inter', sans-serif", fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
        <textarea
          placeholder="Share your thoughts on this article..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          style={{ 
            width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid #e2e8f0', 
            background: '#ffffff', color: '#111827', fontFamily: "'Inter', sans-serif", fontSize: '16px', 
            minHeight: '120px', resize: 'vertical', boxSizing: 'border-box'
          }}
        />
        {error && <p style={{ color: '#ef4444', margin: 0, fontWeight: '700', fontFamily: "'Inter', sans-serif" }}>{error}</p>}
        
        <button 
          type="submit" 
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
          style={{ 
            background: isBtnHovered ? '#ea580c' : '#1e3a8a', 
            color: '#ffffff', padding: '16px 35px', border: 'none', borderRadius: '50px', 
            fontFamily: "'Outfit', sans-serif", fontWeight: '800', fontSize: '16px', cursor: 'pointer', 
            transition: 'all 0.2s ease', textTransform: 'uppercase', letterSpacing: '1.5px', width: 'fit-content',
            transform: isBtnHovered ? 'translateY(-2px)' : 'none',
            boxShadow: isBtnHovered ? '0 10px 20px rgba(234, 88, 12, 0.2)' : 'none'
          }}
        >
          Post Comment
        </button>
      </form>

      {/* STYLED COMMENTS LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {comments.length === 0 ? (
          /* 🪄 FIX APPLIED: Changed color to var(--text-main) here as well */
          <p style={{ color: 'var(--text-main)', opacity: 0.8, fontStyle: 'italic', fontWeight: '500', fontFamily: "'Inter', sans-serif", transition: 'color 0.6s ease' }}>
            No comments yet. Be the first to break the ice!
          </p>
        ) : (
          comments.map((c) => (
            <div 
              key={c.id} 
              style={{ 
                background: '#ffffff', border: '1px solid #e2e8f0', borderLeft: '6px solid #ea580c', 
                borderRadius: '16px', padding: '25px 30px', boxShadow: '0 8px 20px rgba(0,0,0,0.03)',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: '800', fontSize: '19px', color: '#111827' }}>
                  {c.user_name}
                </span>
                <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {new Date(c.created_at).toLocaleDateString()}
                </span>
              </div>
              <p style={{ color: '#374151', lineHeight: '1.8', fontSize: '16px', margin: 0, fontWeight: '500' }}>
                {c.comment_text}
              </p>
            </div>
          ))
        )}
      </div>

      {/* THE WARNING POPUP MODAL */}
      {showPopup && createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999999 }}>
          <div style={{ background: '#fefdf9', padding: '40px', borderRadius: '24px', maxWidth: '450px', width: '90%', textAlign: 'center', border: '1px solid #e2e8f0', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
            <h3 style={{ color: '#ea580c', fontFamily: "'Outfit', sans-serif", fontSize: '26px', fontWeight: '900', marginTop: 0, marginBottom: '15px' }}>
              ⚠️ Community Rules
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '16px', marginBottom: '35px', fontFamily: "'Inter', sans-serif" }}>
              Please keep the discussion respectful and focus on the game. <strong>Abusive language, hate speech, and disrespectful behavior will not be tolerated.</strong>
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <button
                onClick={() => setShowPopup(false)}
                onMouseEnter={() => setIsCancelHovered(true)}
                onMouseLeave={() => setIsCancelHovered(false)}
                style={{ 
                  background: isCancelHovered ? '#e2e8f0' : '#f8fafc', color: '#111827', border: '1px solid #cbd5e1', 
                  padding: '12px 25px', borderRadius: '50px', fontWeight: '700', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                  transition: 'background 0.2s ease'
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmAndPostComment}
                onMouseEnter={() => setIsConfirmHovered(true)}
                onMouseLeave={() => setIsConfirmHovered(false)}
                style={{ 
                  background: isConfirmHovered ? '#c2410c' : '#ea580c', color: '#fff', border: 'none', 
                  padding: '12px 25px', borderRadius: '50px', fontWeight: '700', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                  boxShadow: '0 10px 20px rgba(234, 88, 12, 0.3)', transition: 'background 0.2s ease'
                }}
              >
                I Agree, Post
              </button>
            </div>
          </div>
        </div>,
        document.body 
      )}
    </div>
  );
}