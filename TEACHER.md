## SET UP ##

- need yarn install

## SCSS x CSS ##
- SCSS has variables;
- SCSS allows nesting;
- SCSS allows chaining on subclasses;
  & allows to call same element inside the nesting. Ex.:

  `a {`
    `color: grey;`

    `&:hover {`
      `color: black;`
    `}`
  `}`

-SCSS partials;

## SEE LE WAGON CUSTOM SETUP ##
Bootstrap, (JS Dependency: jQuery & Popper.js):

- yarn add bootstrap
- /* app/assets/stylesheets/application.scss */
- @import "bootstrap/scss/bootstrap";

Font Awesome
Simple Form
Autoprefixer
gem 'autoprefixer-rails'
gem 'font-awesome-sass', '~> 5.6.1'
gem 'simple_form'

bundle install
rails generate simple_form:install --bootstrap (runs simple form config to use bootstrap styling)

Le Wagon's Stylesheets
rm -rf app/assets/stylesheets
curl -L https://github.com/lewagon/rails-stylesheets/archive/master.zip > stylesheets.zip
unzip stylesheets.zip -d app/assets && rm -f stylesheets.zip && rm -f app/assets/rails-stylesheets-master/README.md
mv app/assets/rails-stylesheets-master app/assets/stylesheets

To enable Bootstrap responsiveness:
<!-- app/views/layouts/application.html.erb -->

<!-- <!DOCTYPE html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
</head  > -->