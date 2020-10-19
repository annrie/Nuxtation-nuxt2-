module.exports = {
  '*.(js|vue)': ['eslint', 'prettier --write'],
  '*.(vue|htm|html|css|less|sass|scss|styl|stylus|md)': [
    'eslint',
    'prettier --write',
  ],
  '*.(htm|html)': ['htmlhint', 'prettier --write'],
}
