module.exports.postCreateUser = function(req, res, next){
	var errors = [];
	if(!req.body.name){
		errors.push('Name is required');
	}

	if(!req.body.phone){
		errors.push('phone is required');
	}

	if(errors.length){
		res.render('users/create',{
			errors: errors,
			values: req.body
		})
		return;
	}
	next();
};