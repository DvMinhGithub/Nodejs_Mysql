
let getHomePage = (req, res) => {
    return res.render('home.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('about.ejs');
}

export default  {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}
