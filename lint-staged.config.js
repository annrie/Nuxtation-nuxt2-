module.exports = {
  "*.(js|vue)": ["eslint", "prettier --write"],
  "*.(css|less|sass|scss|styl|stylus|md)": ["stylelint", "prettier --write"],
  "*.(htm|html)": ["htmlhint", "prettier --write"],
};
