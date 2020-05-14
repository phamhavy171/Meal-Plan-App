module.exports.nonLoginUser = (req, res, next) => {
	if (req.isUnauthenticated()) {
		res.redirect('/login');
	} else {
		next();
	}
}

// tle added this