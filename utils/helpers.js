module.exports = {
  getTagJSON: (tag) => {
    let tagObj = JSON.stringify(tag);
    return tagObj.name;
  },
};
