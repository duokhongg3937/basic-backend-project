let getHomepage = (req, res) => {
    // logic handle
    var a = 1;
    return res.render("index.ejs");
};

module.exports = {
    getHomepage,
};
