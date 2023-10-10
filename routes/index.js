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

router.get('/oauth/battlenet',
  passport.authenticate('bnet'));

router.get('/oauth/battlenet/callback',
  passport.authenticate('bnet', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  });

router.get('/blizzaccount', function (req, res) {
  if (req.isAuthenticated()) {
    const output = `
      <html>
        <body>
          <h1>Express Passport-Bnet OAuth Example</h1>
          <table>
            <tr>
              <th>Account ID</th>
              <th>Battletag</th>
            </tr>
            <tr>
              <td>${req.user.googleId}</td>
              <td>${req.user.name}</td>
            </tr>
          </table>
          <br />
          <a href="/logout">Logout</a>
        </body>
      </html>
    `;
    res.send(output);
  } else {
    const output = `
      <html>
        <body>
          <h1>Express Passport-Bnet OAuth Example</h1>
          <br />
          <a href="/oauth/battlenet">Login with Bnet</a>
        </body>
      </html>
    `;
    res.send(output);
  }
});


router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/characters');
  });
});

module.exports = router;
