module.exports = {
  '*.(js|vue)': ['eslint --fix --cache'],
  '*.(css|less|sass|scss|styl|stylus|md)': ['stylelint --fix --cache'],
  '*.(htm|html)': ['htmlhint', 'prettier --write'],
};
