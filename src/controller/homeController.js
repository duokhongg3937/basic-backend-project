let getHomepage = (req, res) => {
    // logic handle
    return res.render('index.ejs');
};

module.exports = {
    getHomepage
}