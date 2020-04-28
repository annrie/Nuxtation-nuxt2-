module.exports = {
  '*.(js|vue)': ['eslint --fix --cache', 'prettier --write'],
  '*.(vue|htm|html|css|less|sass|scss|styl|stylus|md|js)': [
    'stylelint --fix --cache',
    'prettier --write ',
  ],
  '*.(htm|html)': ['htmlhint', 'prettier --write'],
}
