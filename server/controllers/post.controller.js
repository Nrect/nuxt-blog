const Post = require('../models/post.model')

module.exports.create = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    imageUrl: `/${req.file.filename}`
  })
  try {
    await post.save()
    res.status(201).json(post)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 })
    res.json(posts)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Post.findById(req.params.id).populate('comments').exec((error, post) => {
      if (error) {
        res.status(500).json(error)
      }
      res.json(post)
    })
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports.update = async (req, res) => {
  const $set = {
    text: req.body.text
  }
  try {
    const post = await Post.findOneAndUpdate({
      _id: req.params.id
    }, { $set }, { new: true })
    res.json(post)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
    res.json({ message: 'Пост удалён!' })
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports.addView = async (req, res) => {
  const $set = { views: ++req.body.views }
  try {
    await Post.findOneAndUpdate({ _id: req.params.id }, { $set })
    res.status(204).json()
  } catch (err) {
    res.status(500).json(err)
  }
}
