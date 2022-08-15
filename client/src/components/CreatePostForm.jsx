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
              <div className="media-inputs">
                <div className="url-input">
                  <input
                    type="text"
                    defaultValue={formValues.image_url}
                    onChange={handleChange}
                    id={'image_url'}
                    placeholder={'Image URL'}
                    className="input-box"
                  />
                </div>
                <div className="text-input">
                  <textarea
                    type="text"
                    defaultValue={formValues.caption}
                    onChange={handleChange}
                    id={'caption'}
                    placeholder={'Image Caption'}
                    className="edit-bio-text"
                  ></textarea>
                </div>
                <div>
                  <div className="edit-post-icon">
                    <img
                      src="https://freeiconshop.com/wp-content/uploads/edd/cross-flat.png"
                      alt="edit"
                      // onClick={() => cancel()}
                    />
                    <img
                      src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png"
                      alt="edit"
                      // onClick={() => confirm()}
                    />
                  </div>
                </div>
              </div>
            </div>
      )
    } else if (selectVideo === true) {
      return (
        <div className="new-media">
            <div className="box-title">
              <VideoPosts post={formValues} displayedUser={currentUser} />
            </div>
            <div className="media-inputs">
              <div className="url-input">
                <input
                  type="text"
                  defaultValue={formValues.video_url}
                  onChange={handleChange}
                  id={'video_url'}
                  placeholder={'Video URL'}
                  className="input-box"
                />
              </div>
              <div classname="text-input">
                <textarea
                  type="text"
                  defaultValue={formValues.caption}
                  onChange={handleChange}
                  id={'caption'}
                  placeholder={'Video Caption'}
                  className="edit-bio-text"
                ></textarea>
              </div>
            </div>
          </div>
      )
    } else if (selectWritten === true) {
      return (
        <div className="new-media">
              <div className="box-title">
                <WrittenPosts post={formValues} />
              </div>
              <div className="new-media">
                <div className="title-input">
                <input
                  type="text"
                  defaultValue={formValues.title}
                  onChange={handleChange}
                  id={'title'}
                  placeholder={'Post Title'}
                  className="input-box"
                />
                </div>
                <div className="text-input">
                <textarea
                  type="text"
                  defaultValue={formValues.text}
                  onChange={handleChange}
                  id={'text'}
                  placeholder={'Post Text'}
                  className="edit-bio-text"
                ></textarea>
                </div>
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

  // const confirm = async () => {
  //   await updateUser(currentUser.id, formValues)
  //   await setCurrentUser(formValues)
  //   localStorage.clear()
  //   StayLogged(currentUser)
  //   await setSelectImage(false)
  //   await setSelectVideo(false)
  //   await setSelectWritten(false)
  // }

  // const cancel = async () => {

  // }

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
