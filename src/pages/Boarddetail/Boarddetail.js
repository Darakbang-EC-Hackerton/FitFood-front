// src/components/JunglePostDetail.js
import { useState } from 'react';
import Button2 from './components/Ui/Button2';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/Ui/Card";
import { Input } from "./components/Ui/Input";
import { Avatar, AvatarFallback } from "./components/Ui/Avatar";
import { Heart, MessageCircle, Send, Edit, Trash2, Leaf } from "lucide-react";

const examplePost = {
  id: 1,
  title: "정글 탐험 일지",
  content: "오늘 정글에서 놀라운 경험을 했습니다. 다양한 동식물들과 마주치며 자연의 경이로움을 느꼈습니다.",
  author: "정글 탐험가",
  likes: 15,
  comments: [
    { id: 1, author: "김철수", content: "정말 흥미진진한 탐험 이야기네요!" },
    { id: 2, author: "이영희", content: "저도 언젠가 정글 탐험을 해보고 싶어요." },
  ]
}

export default function JunglePostDetail() {
  const [post, setPost] = useState(examplePost);
  const [newComment, setNewComment] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentContent, setEditedCommentContent] = useState('');
  const [hasLiked, setHasLiked] = useState(false);
  const currentUser = "현재 사용자"; // 실제 앱에서는 로그인된 사용자 정보를 사용해야 합니다

  const handleLike = () => {
    if (!hasLiked) {
      setPost(prevPost => ({ ...prevPost, likes: prevPost.likes + 1 }));
      setHasLiked(true);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: post.comments.length + 1,
        author: currentUser,
        content: newComment.trim()
      };
      setPost(prevPost => ({
        ...prevPost,
        comments: [...prevPost.comments, newCommentObj]
      }));
      setNewComment('');
      setShowCommentInput(false);
    }
  };

  const handleEditComment = (commentId) => {
    const commentToEdit = post.comments.find(comment => comment.id === commentId);
    if (commentToEdit) {
      setEditingCommentId(commentId);
      setEditedCommentContent(commentToEdit.content);
    }
  };

  const handleSaveEdit = () => {
    if (editingCommentId !== null) {
      setPost(prevPost => ({
        ...prevPost,
        comments: prevPost.comments.map(comment =>
          comment.id === editingCommentId
            ? { ...comment, content: editedCommentContent }
            : comment
        )
      }));
      setEditingCommentId(null);
      setEditedCommentContent('');
    }
  };

  const handleDeleteComment = (commentId) => {
    setPost(prevPost => ({
      ...prevPost,
      comments: prevPost.comments.filter(comment => comment.id !== commentId)
    }));
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #86efac, #4ade80)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <Card style={{ width: '100%', maxWidth: '640px', backgroundColor: '#f0fdf4', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: '1px solid #4ade80' }}>
        <CardHeader style={{ backgroundColor: '#065f46', color: 'white', padding: '1rem' }}>
          <CardTitle style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <Leaf style={{ marginRight: '0.5rem' }} />
            {post.title}
          </CardTitle>
          <p style={{ fontSize: '0.875rem', color: '#bbf7d0' }}>작성자: {post.author}</p>
        </CardHeader>
        <CardContent style={{ padding: '1.5rem' }}>
          <p style={{ color: '#065f46', marginBottom: '1rem' }}>{post.content}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Button2
              variant={hasLiked ? "secondary" : "outline"}
              size="sm"
              onClick={handleLike}
              disabled={hasLiked}
              style={{ backgroundColor: '#065f46', color: 'white', opacity: hasLiked ? 0.5 : 1, cursor: hasLiked ? 'not-allowed' : 'pointer' }}
            >
              <Heart style={{ height: '1rem', width: '1rem', marginRight: '0.5rem', fill: hasLiked ? 'currentColor' : 'none' }} />
              좋아요 {post.likes}
            </Button2>
            <Button2
              variant="outline"
              size="sm"
              onClick={() => setShowCommentInput(!showCommentInput)}
              style={{ backgroundColor: '#22c55e', color: 'white' }}
            >
              <MessageCircle style={{ height: '1rem', width: '1rem', marginRight: '0.5rem' }} />
              댓글 달기
            </Button2>
          </div>
          {showCommentInput && (
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
              <Input
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="댓글을 입력하세요..."
                style={{ flexGrow: 1, border: '1px solid #4ade80', outline: 'none', padding: '0.5rem' }}
              />
              <Button2 onClick={handleAddComment} style={{ backgroundColor: '#065f46', color: 'white' }}>
                <Send style={{ height: '1rem', width: '1rem' }} />
              </Button2>
            </div>
          )}
        </CardContent>
        <CardFooter style={{ padding: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#065f46' }}>댓글</h3>
          {post.comments.map((comment) => (
            <div key={comment.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem', backgroundColor: '#f0fdf4', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #bbf7d0' }}>
              <Avatar>
                <AvatarFallback style={{ backgroundColor: '#4ade80', color: '#065f46' }}>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <div style={{ flexGrow: 1 }}>
                <p style={{ fontWeight: 'bold', color: '#065f46' }}>{comment.author}</p>
                {editingCommentId === comment.id ? (
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
                    <Input
                      value={editedCommentContent}
                      onChange={(e) => setEditedCommentContent(e.target.value)}
                      style={{ flexGrow: 1, border: '1px solid #4ade80', outline: 'none', padding: '0.5rem', marginRight: '0.5rem' }}
                    />
                    <Button2 onClick={handleSaveEdit} size="sm" style={{ backgroundColor: '#065f46', color: 'white' }}>
                      저장
                    </Button2>
                  </div>
                ) : (
                  <p style={{ fontSize: '0.875rem', color: '#065f46' }}>{comment.content}</p>
                )}
              </div>
              {comment.author === currentUser && editingCommentId !== comment.id && (
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  <Button2
                    onClick={() => handleEditComment(comment.id)}
                    size="sm"
                    variant="ghost"
                    style={{ color: '#4ade80', cursor: 'pointer' }}
                  >
                    <Edit style={{ height: '1rem', width: '1rem' }} />
                  </Button2>
                  <Button2
                    onClick={() => handleDeleteComment(comment.id)}
                    size="sm"
                    variant="ghost"
                    style={{ color: '#f87171', cursor: 'pointer' }}
                  >
                    <Trash2 style={{ height: '1rem', width: '1rem' }} />
                  </Button2>
                </div>
              )}
            </div>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
