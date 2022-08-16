import React from 'react'
import { useEffect, useState } from 'react'
import VideoPosts from './VideoPosts'
import ImagePosts from './ImagePosts'
import WrittenPosts from './WrittenPosts'
import {
  CreateWrittenPost,
  CreateImagePost,
  CreateVideoPost,
  GetImagePosts,
  GetVideoPosts,
  GetWrittenPosts
} from '../services/PostServices'

const CreatePostForm = ({ currentUser, post, setPosts }) => {
  const [formValues, setFormValues] = useState({
    title: '',
    text: '',
    img_url: '',
    video_url: '',
    caption: '',
    userId: parseInt(currentUser.id)
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
      return (
        <div className="new-media">
          <div>
            <h3>New Image Post</h3>
          </div>
          <div className="box-title">
            <ImagePosts post={formValues} displayedUser={currentUser} />
          </div>
          <div className="media-inputs">
            <div className="url-input">
              <input
                type="text"
                defaultValue={formValues.img_url}
                onChange={handleChange}
                id={'img_url'}
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
                  onClick={() => cancel()}
                />
                <img
                  src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png"
                  alt="edit"
                  onClick={() => confirmImagePost()}
                />
              </div>
            </div>
          </div>
        </div>
      )
    } else if (selectVideo === true) {
      return (
        <div className="new-media">
          <div>
            <h3>New Video Post</h3>
          </div>
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
            <div>
              <div className="edit-post-icon">
                <img
                  src="https://freeiconshop.com/wp-content/uploads/edd/cross-flat.png"
                  alt="edit"
                  onClick={() => cancel()}
                />
                <img
                  src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png"
                  alt="edit"
                  onClick={() => confirmVideoPost()}
                />
              </div>
            </div>
          </div>
        </div>
      )
    } else if (selectWritten === true) {
      return (
        <div className="new-media">
          <div>
            <h3>New Written Post</h3>
          </div>
          <div className="box-title">
            <WrittenPosts post={formValues} />
          </div>
          <div className="media-inputs">
            <div className="url-input">
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
            <div>
              <div className="edit-post-icon">
                <img
                  src="https://freeiconshop.com/wp-content/uploads/edd/cross-flat.png"
                  alt="edit"
                  onClick={() => cancel()}
                />
                <img
                  src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png"
                  alt="edit"
                  onClick={() => confirmWrittenPost()}
                />
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return ''
    }
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const allPosts = []
  const chicken = (res) => {
    for (let i = 0; i < res.length; i++) {
      allPosts.push(res[i])
    }
  }

  const confirmImagePost = async () => {
    let newTime = new Date()
    const type = {
      time: newTime.getTime(),
      type: 'image',

      caption: formValues.caption,
      img_url: formValues.img_url,
      userId: parseInt(currentUser.id),
      createdAt: new Date(),
      updatedAt: new Date()
    }

    await CreateImagePost(type)
    await setSelectImage(false)
    await setSelectVideo(false)
    await setSelectWritten(false)
    setFormValues({
      title: '',
      text: '',
      img_url: '',
      video_url: '',
      caption: '',
      userId: parseInt(currentUser.id)
    })

    await GetImagePosts().then((res) => chicken(res))
    await GetVideoPosts().then((res) => chicken(res))
    await GetWrittenPosts().then((res) => chicken(res))
    const sortPosts = allPosts.slice().sort((a, b) => b.time - a.time)

    await setPosts(sortPosts)
  }

  const confirmVideoPost = async () => {
    let newTime = new Date()
    const type = {
      time: newTime.getTime(),
      type: 'video',
      caption: formValues.caption,
      video_url: formValues.video_url,
      userId: parseInt(currentUser.id),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    await CreateVideoPost(type)
    await setSelectImage(false)
    await setSelectVideo(false)
    await setSelectWritten(false)
    setFormValues({
      title: '',
      text: '',
      img_url: '',
      video_url: '',
      caption: '',
      userId: parseInt(currentUser.id)
    })

    await GetImagePosts().then((res) => chicken(res))
    await GetVideoPosts().then((res) => chicken(res))
    await GetWrittenPosts().then((res) => chicken(res))
    const sortPosts = allPosts.slice().sort((a, b) => b.time - a.time)

    await setPosts(sortPosts)
  }

  const confirmWrittenPost = async () => {
    let newTime = new Date()
    const type = {
      time: newTime.getTime(),
      type: 'written',
      title: formValues.title,
      text: formValues.text,

      userId: parseInt(currentUser.id),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    await CreateWrittenPost(type)
    await setSelectImage(false)
    await setSelectVideo(false)
    await setSelectWritten(false)
    setFormValues({
      title: '',
      text: '',
      img_url: '',
      video_url: '',
      caption: '',
      userId: parseInt(currentUser.id)
    })
    await GetImagePosts().then((res) => chicken(res))
    await GetVideoPosts().then((res) => chicken(res))
    await GetWrittenPosts().then((res) => chicken(res))
    const sortPosts = allPosts.slice().sort((a, b) => b.time - a.time)

    await setPosts(sortPosts)
  }

  const cancel = async () => {
    await setSelectImage(false)
    await setSelectVideo(false)
    await setSelectWritten(false)
    setFormValues({
      title: '',
      text: '',
      img_url: '',
      video_url: '',
      caption: '',
      userId: parseInt(currentUser.id)
    })
  }

  return (
    <div className="whole-media">
      <div className="bio-conditional">
        {selectImage ? (
          <div
            className="bio-conditional-type"
            onClick={() => imageInputForm()}
            id="bio-selected-type"
          >
            <h4>Add Image</h4>
          </div>
        ) : (
          <div
            className="bio-conditional-type"
            onClick={() => imageInputForm()}
          >
            <h4>Add Image</h4>
          </div>
        )}
        {selectVideo ? (
          <div
            className="bio-conditional-type"
            id="bio-selected-type"
            onClick={() => videoInputForm()}
          >
            <h4>Add Video</h4>
          </div>
        ) : (
          <div
            className="bio-conditional-type"
            onClick={() => videoInputForm()}
          >
            <h4>Add Video</h4>
          </div>
        )}
        {selectWritten ? (
          <div
            className="bio-conditional-type"
            id="bio-selected-type"
            onClick={() => writtenInputForm()}
          >
            <h4>Add Text</h4>
          </div>
        ) : (
          <div
            className="bio-conditional-type"
            onClick={() => writtenInputForm()}
          >
            <h4>Add Text</h4>
          </div>
        )}
      </div>
      {checkInputForm()}
    </div>
  )
}

export default CreatePostForm
