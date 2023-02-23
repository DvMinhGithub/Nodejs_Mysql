import db from '../models';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        res.json({ data });
    } catch (error) {
        console.error(error);
    }
};

let getAboutPage = (req, res) => {
    return res.render('about.ejs');
};

export default {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
};
