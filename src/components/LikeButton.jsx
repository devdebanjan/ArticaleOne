import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient.js';

export default function LikeButton({ articleId }) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const storageKey = `liked_${articleId}`;

  useEffect(() => {
    if (localStorage.getItem(storageKey) === 'true') {
      setHasLiked(true);
    }

    const fetchLikes = async () => {
      const { data, error } = await supabase
        .from('likes')
        .select('likes_count')
        .eq('article_id', articleId)
        .maybeSingle();

      if (data) {
        setLikes(data.likes_count);
      }
    };

    fetchLikes();
  }, [articleId, storageKey]);

  const toggleLike = async () => {
    if (isProcessing) return; 
    setIsProcessing(true);

    const newHasLiked = !hasLiked; 
    const newLikesCount = newHasLiked ? likes + 1 : Math.max(0, likes - 1); 

    setHasLiked(newHasLiked);
    setLikes(newLikesCount);

    if (newHasLiked) {
      localStorage.setItem(storageKey, 'true');
    } else {
      localStorage.removeItem(storageKey);
    }

    const { data: existingRow } = await supabase
      .from('likes')
      .select('id')
      .eq('article_id', articleId)
      .maybeSingle();

    let dbError;

    if (existingRow) {
      const { error } = await supabase
        .from('likes')
        .update({ likes_count: newLikesCount })
        .eq('article_id', articleId);
      dbError = error;
    } else {
      const { error } = await supabase
        .from('likes')
        .insert([{ article_id: articleId, likes_count: newLikesCount }]);
      dbError = error;
    }

    if (dbError) {
      console.error('Error saving likes to database:', dbError);
      setHasLiked(!newHasLiked);
      setLikes(likes);
    }

    setIsProcessing(false);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '60px auto 0 auto', borderTop: '2px dashed #e2e8f0', paddingTop: '50px' }}>
      <button 
        onClick={toggleLike} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={isProcessing}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 28px',
          background: hasLiked ? '#ea580c' : '#ffffff',
          color: hasLiked ? '#ffffff' : '#111827',
          border: hasLiked ? '2px solid #ea580c' : '2px solid #e2e8f0',
          borderRadius: '50px',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: '800',
          fontSize: '16px',
          cursor: isProcessing ? 'wait' : 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.02)',
          transform: isHovered ? 'translateY(-2px)' : 'none',
        }}
      >
        <span>{hasLiked ? '🔥' : '🤍'}</span>
        <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
      </button>
    </div>
  );
}