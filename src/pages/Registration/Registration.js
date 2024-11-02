// src/pages/Registration.js

import React, { useState } from 'react';
import './Registration.css';
import { PenLine, ImagePlus } from 'lucide-react';

export default function Registration() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="registration-container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            <PenLine className="icon" />
            새 게시물 작성
          </h2>
        </div>
        <div className="card-content">
          <form className="registration-form">
            <div className="form-group">
              <label htmlFor="title" className="form-label">제목</label>
              <input
                id="title"
                type="text"
                placeholder="멋진 제목을 입력해주세요"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="content" className="form-label">내용</label>
              <textarea
                id="content"
                placeholder="여러분의 이야기를 자유롭게 펼쳐보세요"
                className="form-textarea"
              />
            </div>

            <div className="form-group">
              <label htmlFor="image" className="form-label image-label">
                <ImagePlus className="icon" />
                이미지 첨부
              </label>
              <div className="image-input-group">
                <div className="image-input-wrapper">
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="form-input"
                    onChange={handleImageChange}
                  />
                </div>
                {imagePreview && (
                  <div className="image-preview">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="image-preview-content"
                    />
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <button type="submit" className="submit-button">
            게시물 등록하기
          </button>
        </div>
      </div>
    </div>
  );
}
