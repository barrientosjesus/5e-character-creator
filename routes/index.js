var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '5e Character Creator' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email']
  }
));

router.get('/oauth2callback', function (req, res, next) {
  const redirectTo = req.session.redirectTo;
  delete req.session.redirectTo;
  passport.authenticate(
    'google',
    {
      successRedirect: redirectTo || '/',
      failureRedirect: '/'
    }
  )(req, res, next);  // Call the middleware returned by passport
});

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/');
  });
});

module.exports = router;
