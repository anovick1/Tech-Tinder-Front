import React from 'react'
import { useEffect, useState } from 'react'
import VideoPosts from './VideoPosts'
import ImagePosts from './ImagePosts'
import WrittenPosts from './WrittenPosts'

const CreatePostForm = ({ currentUser, post }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    text: "",
    img_url: "",
    video_url: "",
    caption: ""
  })

  const [selectImage, setSelectImage] = useState(false)
  const [selectVideo, setSelectVideo] = useState(false)
  const [selectWritten, setSelectWritten] = useState(false)

  const imageInputForm = () => {
    if (!selectImage) {
      setSelectImage(true)
      setSelectVideo(false)
      setSelectWritten(false)
    } else if (selectImage) {
      setSelectImage(false)
    }
  }

  const videoInputForm = () => {
    if (!selectVideo) {
      setSelectVideo(true)
      setSelectImage(false)
      setSelectWritten(false)
    } else if (selectVideo) {
      setSelectVideo(false)
    }
  }

  const writtenInputForm = () => {
    if (!selectWritten) {
      setSelectWritten(true)
      setSelectImage(false)
      setSelectVideo(false)
    } else if (selectWritten) {
      setSelectWritten(false)
    }
  }

  const checkInputForm = () => {
    if (selectImage === true) {
      return(
        <div className="new-media">
              <div className="box-title">
                <ImagePosts post={formValues} displayedUser={currentUser} />
              </div>
                <input
                  type="text"
                  defaultValue={formValues.image_url}
                  onChange={handleChange}
                  id={'image_url'}
                  placeholder={'Image URL'}
                  className="input-box"
                />
                <textarea
                  type="text"
                  defaultValue={formValues.caption}
                  onChange={handleChange}
                  id={'caption'}
                  placeholder={'Image Caption'}
                  className="edit-bio-text"
                ></textarea>
              <div className="post-text">
                <h4>{formValues.caption}</h4>
              </div>
            </div>
      )
    } else if (selectVideo === true) {
      return (
        <div className="new-media">
            <div className="box-title">
              <VideoPosts post={formValues} displayedUser={currentUser} />
            </div>
              <input
                type="text"
                defaultValue={formValues.video_url}
                onChange={handleChange}
                id={'video_url'}
                placeholder={'Video URL'}
                className="input-box"
              />
              <textarea
                type="text"
                defaultValue={formValues.caption}
                onChange={handleChange}
                id={'caption'}
                placeholder={'Video Caption'}
                className="edit-bio-text"
              ></textarea>
              <div className="post-text">
                <h4>{formValues.caption}</h4>
            </div>
          </div>
      )
    } else if (selectWritten === true) {
      return (
        <div className="new-media">
              <div className="box-title">
                <WrittenPosts post={formValues} />
              </div>
                <input
                  type="text"
                  defaultValue={formValues.title}
                  onChange={handleChange}
                  id={'title'}
                  placeholder={'Post Title'}
                  className="input-box"
                />
                <textarea
                  type="text"
                  defaultValue={formValues.text}
                  onChange={handleChange}
                  id={'text'}
                  placeholder={'Post Text'}
                  className="edit-bio-text"
                ></textarea>
              <div className="post-text">
                <h4>{formValues.text}</h4>
              </div>
          </div>
      )
    } else {
    return ""
    }
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

      return (
        <div>
          <div className="user-nav-dropdown">
            <button className="dropbtn" id="add-media">
              <div className="gender">
                Add Media
              </div>
            </button>
            <div className="dropdown-content">
              <div className="user-profile">
                <h4 onClick={() => imageInputForm()}>Image</h4>
              </div>
              
              <div className="user-profile">
                <h4 onClick={() => videoInputForm()}>Video</h4>
              </div>
              <div>
                <h4 onClick={() => writtenInputForm()}>Written</h4>
              </div>
            </div>
          </div>
          {checkInputForm()}
        </div>
        
      )
}

export default CreatePostForm
