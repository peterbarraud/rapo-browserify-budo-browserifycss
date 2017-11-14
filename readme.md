# Browserify with Budo & Browserify CSS
So going one step on from my intro template ([browserify-budo](https://github.com/peterbarraud/rapo-browserify-budo)), let's use [browserify-css](https://github.com/cheton/browserify-css) to include external CSS libs in our browserify+budo setup

## What's in this repo (now not rapo)
Besides browserify and budo, we're going to include the browserify-css tranform that'll allow us to include external libraries with a super convenient `require` statements in the entry js file (index.js).
* **index.js**: Has the references to all your external libs (**CSS** and **JS**). These are the require statements that are browserify'd.
* **./src**: This holds your JS and CSS source files. These are also referenced in `index.js`
* **package.json**: This has a `start` script that runs the localhost. If you're including external CSS libs with *only* a require statement, you're probably going to have to change the browserify-css -t flag to -g (global). See the `index.js` file that has commented out `require` statements for samples. If a lib that you include does not work with a simple require statement, you might have to require upto the `.css` reference in given in the lib's `package.json`

## Browserify + Bulma (and other external CSS libs)

## Browserify + jQuery

## Browserify + Bootstrap

## Get going
1. Clone this repo
2. `cd` into the resultant dir
3. Run `npm install` to get the dependencies
4. Run `npm start` to launch the project in your default browser running on a local (`Node`-based) web server with `livereload` - all setup.

That's it.

## Building the project for deployment
Well, this may be a rapo but we might still want to push this onto a prod environment. A apache server or something of the sort.

To generate a prod output, I've also created a `build.js` file that run using:
```
npm run build
```
This creates a build dir that includes all you need to push to prod.