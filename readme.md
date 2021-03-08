# Hugo Start

This is a package which has a super-simple TailwindCSS 2.0 with PurgeCSS pre-configured.

It doesn't use any bundlers like webpack or anything like that.

# Getting Started
1. Make sure you <a href="https://gohugo.io">hugo</a> installed
2. Clone the repo `git clone https://github.com/hallindavid/hugo_start.git [your project name here]`
3. pull in npm resources with `npm install`
4. Open the `config.toml` file
5. Update all the fields to the correct values, eg. `title`, `copyright`, `params.subtitle`, `params.avatar`, the `menu` system, your `social` links

## Styling & Theming
If you're working on CSS stuff, and want the full tailwindcss package (without purgecss active) use 
```shell
npm run build
```
This respects tailwind.config.js and any components you've configured in `resources/styles/style.css`, but will not run PurgeCSS, so you'll have a big css file

To build the production assets with `PurgeCSS` use
```shell
npm run prod
```
This will run through your tailwind stuff, and then run PurgeCSS.

both of these scripts generate your css file into `static/css/style.css` and this static css file is what gets pulled into the layout.

When you're writing new posts and want to hot-load your stuff, use
```shell
npm run watch
```

This runs the `npm run build` script (no purge css) and then starts your hugo server, which has hot-reloading active by default

## Directory Structure

```
/achetypes # this is sort of a models folder - you probably won't touch it, unless you're experiences with Hugo
|-default.md #when running hugo new [resource name] - this will be the default file. 
/content/
|-about.md #your about page - customize it as needed
|-otherpage.md # You can add other pages in this section as well if you want other top-level pages
|-blog/
|-|-post1.md # this is where your blog posts will be stored
|-|-[postname].md
/layouts/
|-_default/
|-|-list.html - list/collection pages that aren't overwritten will use this .html file eg "posts" page, or "projects" etc
|-|-single.html - individual pages that aren't overwritten will use this .html file eg. "view post" page
|-|-term.html - this is for the "view tag" page
|-|-terms.html - this is for the "tags" page
|-partials/
|-|-footer.html - gets loaded at the end of every page
|-|-head.html - this is your nav bar
|-|-header.html - this is all your <head> meta content
|-|-paginator.html - this is the paginator that gets used on list pages
|-404.html - the 404 page
|-index.html - the home page - in this template it's basically the exact same as the _default/list.html page, but you can customize as needed
/public/ #this is where you should serve the production assets from
/resources/
|-css/ 
|-|-style.css # this is where you add your custom styles, create tailwind components etc.
/static/ - when hugo "builds" your site, it takes the contents of this, and dumps it into public
|-css/ - this is where the npm run build & npm run prod put your style.css file
|-images/ # drop your images in here
```

## Deployment
When you're ready for deployment, you can use the `npm run deploy` script to build all the production assets.
There is also a helpful `netlify.toml` file in the root directory if you choose to use netlify as your hosting service.